import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { contact, brand, sectionIds } from "../data/content";

import { validateContact } from "../contactValidation";

function buildMailtoUrl(values) {
  const optional = (value) => value.trim() || "Not provided";
  const recipient = brand.email.split("@").map(encodeURIComponent).join("@");
  const industry = contact.industries.find((item) => item.value === values.industry);
  const subject = `New Consultation Request | ${brand.fullName}`;
  const body = [
    brand.fullName,
    "New Website Enquiry",
    "",
    "--------------------------------",
    "",
    `Name: ${values.name.trim()}`,
    "",
    `Company: ${optional(values.company)}`,
    "",
    `Email: ${values.email.trim()}`,
    "",
    `Phone: ${optional(values.phone)}`,
    "",
    `Industry: ${values.industry ? industry?.label || values.industry : "Not provided"}`,
    "",
    "Requirement:",
    optional(values.requirement),
    "",
    "Current Business Problem:",
    values.message.trim(),
    "",
    "--------------------------------",
    "",
    "Submitted from:",
    `${brand.fullName} website`,
  ].join("\r\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-xs text-amber-300" role="alert">
      {message}
    </p>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, className: "group block" }
    : { className: "block" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-cyan-300/40 hover:bg-white/[0.05]">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-300/10 border border-cyan-300/20 text-cyan-300 shrink-0">
          <Icon size={16} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/40 mb-0.5">
            {label}
          </p>
          <p className="text-sm text-white/85 leading-snug break-words group-hover:text-white transition-colors">
            {value}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});
  const validate = (nextValues = values) => validateContact(nextValues, contact.industries);
  const setField = (key) => (e) => {
    const value = key === "phone"
      ? e.target.value.replace(/[^0-9]/g, "").slice(0, 10)
      : e.target.value;
    const nextValues = { ...values, [key]: value };
    setValues(nextValues);
    if (touched[key] || errors[key]) {
      setErrors((previous) => ({ ...previous, [key]: validate(nextValues)[key] }));
    }
  };
  const onBlur = (key) => () => {
    setTouched((previous) => ({ ...previous, [key]: true }));
    setErrors((previous) => ({ ...previous, [key]: validate()[key] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setTouched(Object.fromEntries(Object.keys(values).map((key) => [key, true])));
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }
    window.location.href = buildMailtoUrl(values);
  };

  const inputBase =
    "w-full rounded-lg bg-white/[0.04] border text-white placeholder-white/30 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-cyan-300/60 focus:bg-white/[0.06]";

  const inputClass = (hasError) =>
    `${inputBase} ${hasError ? "border-amber-400/60" : "border-white/10"}`;

  const labelClass =
    "block text-[10px] font-medium tracking-[0.16em] uppercase text-white/50 mb-1.5";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6"
    >
      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3.5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-amber-300/70" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            maxLength={100}
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            value={values.name}
            onChange={setField("name")}
            onBlur={onBlur("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
          <FieldError id="contact-name-error" message={errors.name} />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company
          </label>
          <input
            id="contact-company"
            maxLength={120}
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={setField("company")}
            onBlur={onBlur("company")}
            placeholder="Company name"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            className={inputClass(!!errors.company)}
          />
          <FieldError id="contact-company-error" message={errors.company} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-amber-300/70" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            maxLength={254}
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            value={values.email}
            onChange={setField("email")}
            onBlur={onBlur("email")}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
          <FieldError id="contact-email-error" message={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="numeric"
            maxLength={10}
            pattern="[0-9]*"
            value={values.phone}
            onChange={setField("phone")}
            onBlur={onBlur("phone")}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={inputClass(!!errors.phone)}
          />
          <FieldError id="contact-phone-error" message={errors.phone} />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="contact-industry" className={labelClass}>
            Industry
          </label>
          <select
            id="contact-industry"
            value={values.industry}
            onChange={setField("industry")}
            onBlur={onBlur("industry")}
            aria-invalid={!!errors.industry}
            aria-describedby={errors.industry ? "contact-industry-error" : undefined}
            className={`${inputClass(!!errors.industry)} appearance-none pr-9 bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff88' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>")] bg-no-repeat bg-[right_0.9rem_center]`}
          >
            {contact.industries.map((opt) => (
              <option
                key={opt.value || "empty"}
                value={opt.value}
                className="bg-void text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <FieldError id="contact-industry-error" message={errors.industry} />
        </div>

        {/* Requirement */}
        <div>
          <label htmlFor="contact-requirement" className={labelClass}>
            Requirement
          </label>
          <input
            id="contact-requirement"
            maxLength={200}
            type="text"
            value={values.requirement}
            onChange={setField("requirement")}
            onBlur={onBlur("requirement")}
            placeholder="What do you want to automate?"
            aria-invalid={!!errors.requirement}
            aria-describedby={errors.requirement ? "contact-requirement-error" : undefined}
            className={inputClass(!!errors.requirement)}
          />
          <FieldError id="contact-requirement-error" message={errors.requirement} />
        </div>

        {/* Message — full width */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Current business problem{" "}
            <span className="text-amber-300/70" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            maxLength={2000}
            rows={3}
            required
            aria-required="true"
            value={values.message}
            onChange={setField("message")}
            onBlur={onBlur("message")}
            placeholder="Describe the process, delay, repetitive work or visibility problem…"
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputClass(!!errors.message)} resize-y min-h-[72px]`}
          />
          <FieldError id="contact-message-error" message={errors.message} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-cyan-300 text-void font-semibold text-sm px-5 py-3 rounded-lg hover:bg-cyan-300/90 transition-colors"
      >
        {contact.submit}
        <ArrowRight size={15} aria-hidden="true" />
      </button>

      <p className="mt-3 text-[11px] text-white/40 text-center leading-relaxed">
        Fields marked * are required; other fields are optional. Your email app will open with the enquiry details ready to send.
      </p>
    </form>
  );
}

export default function CTA() {
  return (
    <section
      id={sectionIds.contact}
      aria-label="Contact"
      className="section-anchor relative bg-void py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-fade opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/12 blur-[140px] pointer-events-none"
      />

      <div className="relative container-page">
        {/* Heading */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-300/80 mb-3"
          >
            {contact.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.5rem] sm:text-3xl lg:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.15]"
          >
            {contact.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-white/55 text-sm sm:text-base leading-relaxed"
          >
            {contact.sub}
          </motion.p>
        </div>

        {/* Two-column layout: contact cards left, form right */}
        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
          {/* Contact cards column */}
          <div className="space-y-3">
            <ContactCard
              icon={Mail}
              label="Email"
              value={brand.email}
              href={`mailto:${brand.email}`}
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={brand.phone}
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={MapPin}
              label="Location"
              value={brand.address}
            />
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
