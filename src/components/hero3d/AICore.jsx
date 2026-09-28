import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ---------- Ring geometry ---------- */

function buildRings() {
  const rings = [];
  const ringCount = 3;
  for (let r = 0; r < ringCount; r++) {
    const radius = 1.9 + r * 0.55;
    const nodeCount = 6 + r * 2;
    const pts = [];
    const nodePositions = [];
    for (let i = 0; i <= nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2 + r) * 0.15;
      pts.push([x, y, z]);
      if (i < nodeCount) nodePositions.push([x, y, z]);
    }
    rings.push({ pts, nodePositions, tilt: (r - 1) * 0.5 });
  }
  return rings;
}

function buildNeuralLinks(rings) {
  const allNodes = [];
  rings.forEach((ring) => {
    ring.nodePositions.forEach((p) => {
      const [x, y, z] = p;
      const cos = Math.cos(ring.tilt);
      const sin = Math.sin(ring.tilt);
      allNodes.push([x, y * cos - z * sin, y * sin + z * cos]);
    });
  });
  const links = [];
  const linkCount = Math.min(5, Math.floor(allNodes.length / 2));
  for (let i = 0; i < linkCount; i++) {
    const a = allNodes[(i * 5) % allNodes.length];
    const b = allNodes[(i * 5 + 7) % allNodes.length];
    links.push([a, [0, 0, 0], b]);
  }
  return links;
}

/* ---------- Line component (native three.js) ---------- */

function Line({ points, color, opacity = 1 }) {
  const ref = useRef();

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      positions[i * 3 + 0] = p[0];
      positions[i * 3 + 1] = p[1];
      positions[i * 3 + 2] = p[2];
    });
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [points]);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({
            color,
            transparent: true,
            opacity,
            depthWrite: false,
          })
        )
      }
      ref={ref}
    />
  );
}

/* ---------- Sparkles (native Points) ---------- */

function Sparkles({ count = 90, scale = [7, 5, 7], size = 2, speed = 0.25, color = "#7FE6F2", opacity = 0.5 }) {
  const pointsRef = useRef();
  const geometryRef = useRef(null);
  const positionsRef = useRef(null);
  const phasesRef = useRef(null);

  // Generate particle positions once, outside of render.
  // Math.random() inside a useMemo triggers React's purity lint, so we
  // create the geometry imperatively in an effect that runs exactly once.
  useEffect(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const [sx, sy, sz] = scale;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * sx;
      pos[i * 3 + 1] = (Math.random() - 0.5) * sy;
      pos[i * 3 + 2] = (Math.random() - 0.5) * sz;
      ph[i] = Math.random() * Math.PI * 2;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    geometryRef.current = g;
    positionsRef.current = pos;
    phasesRef.current = ph;

    if (pointsRef.current) {
      pointsRef.current.geometry = g;
    }

    return () => {
      g.dispose();
      geometryRef.current = null;
      positionsRef.current = null;
      phasesRef.current = null;
    };
  }, [count, scale]);

  useFrame((state) => {
    if (!pointsRef.current || !positionsRef.current || !phasesRef.current) return;
    const t = state.clock.elapsedTime * speed;
    const posAttr = pointsRef.current.geometry.getAttribute("position");
    const positions = positionsRef.current;
    const phases = phasesRef.current;
    for (let i = 0; i < count; i++) {
      const baseY = positions[i * 3 + 1];
      posAttr.array[i * 3 + 1] = baseY + Math.sin(t + phases[i]) * 0.15;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <pointsMaterial
        color={color}
        size={size * 0.05}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------- Core ---------- */

function Core({ pointer, active, reduced }) {
  const group = useRef();
  const shell = useRef();
  const inner = useRef();

  const rings = useMemo(() => buildRings(), []);
  const links = useMemo(() => buildNeuralLinks(rings), [rings]);

  useFrame((state, delta) => {
    if (!active.current) return;

    const targetX = pointer.current.y * 0.35;
    const targetY = pointer.current.x * 0.5;

    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.04
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY + state.clock.elapsedTime * 0.08,
        0.04
      );
      if (!reduced) {
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
      }
    }
    if (shell.current) shell.current.rotation.y -= delta * 0.05;
    if (inner.current) inner.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#3FD4E8"
          emissive="#2AD1B8"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.4}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#0B1330"
          emissive="#2F5CF0"
          emissiveIntensity={0.9}
          roughness={0.3}
        />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial
          color="#4C7CFF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {rings.map((ring, i) => (
        <group key={i} rotation={[ring.tilt, 0, 0]}>
          <Line points={ring.pts} color="#3FD4E8" opacity={0.35} />
          {ring.nodePositions.map((p, j) => (
            <mesh position={p} key={j}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshStandardMaterial
                color="#7FE6F2"
                emissive="#3FD4E8"
                emissiveIntensity={1.2}
              />
            </mesh>
          ))}
        </group>
      ))}

      {links.map((pts, i) => (
        <Line key={i} points={pts} color="#7FE6F2" opacity={0.18} />
      ))}
    </group>
  );
}

/* ---------- Renderer (drives frameloop="demand") ---------- */

function Renderer() {
  const { invalidate } = useThree();
  const rafRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      invalidate();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [invalidate]);

  return null;
}

/* ---------- Scene ---------- */

function Scene() {
  const pointer = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const active = useRef(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first) active.current = first.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => {
      active.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const [isSmall, setIsSmall] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mqSmall = window.matchMedia("(max-width: 640px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setIsSmall(mqSmall.matches);
      setReduced(mqReduce.matches);
    };
    update();

    mqSmall.addEventListener?.("change", update);
    mqReduce.addEventListener?.("change", update);
    return () => {
      mqSmall.removeEventListener?.("change", update);
      mqReduce.removeEventListener?.("change", update);
    };
  }, []);

  const handlePointerMove = (e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      rafRef.current = 0;
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 rounded-3xl overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(63,212,232,0.18),transparent_60%)]"
      />

      <Canvas
        dpr={isSmall ? [1, 1.25] : [1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop={reduced ? "never" : "demand"}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#3FD4E8" />
        <pointLight position={[-4, -3, -2]} intensity={0.8} color="#2F5CF0" />

        <Core pointer={pointer} active={active} reduced={reduced} />

        <Sparkles
          count={isSmall ? 45 : 90}
          scale={[7, 5, 7]}
          size={2}
          speed={reduced ? 0 : 0.25}
          color="#7FE6F2"
          opacity={0.5}
        />

        {!reduced && <Renderer />}
      </Canvas>
    </div>
  );
}

export default function AICore() {
  return <Scene />;
}