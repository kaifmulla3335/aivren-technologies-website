const NAME_RE = /^\p{L}[\p{L}\p{M}]*(?:[ .\u2019'-]+\p{L}[\p{L}\p{M}]*)*\.?$/u;
const EMAIL_LOCAL_RE = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/;
const DOMAIN_LABEL_RE = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;

function validEmail(value) {
  if (value.length > 254 || /\s/.test(value)) return false;
  const parts = value.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  const labels = domain.split('.');
  return local.length > 0 && local.length <= 64 && EMAIL_LOCAL_RE.test(local)
    && !local.startsWith('.') && !local.endsWith('.') && !local.includes('..')
    && labels.length >= 2 && labels.every(label => DOMAIN_LABEL_RE.test(label))
    && /^[A-Za-z]{2,63}$/.test(labels.at(-1));
}

export function validateContact(values, industryOptions) {
  const errors = {};
  const name = values.name.trim();
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length > 100 || !NAME_RE.test(name))
    errors.name = 'Enter a valid name using letters, spaces, initials, apostrophes or hyphens. Numbers and other symbols are not allowed.';

  const company = values.company.trim();
  if (company && (company.length > 120 || !/[\p{L}\p{N}]/u.test(company)))
    errors.company = 'Enter a company name containing letters or numbers (up to 120 characters).';

  if (!validEmail(values.email.trim()))
    errors.email = 'Please enter a valid email address, such as name@company.com.';

  if (values.phone.trim() && !/^[6-9][0-9]{9}$/.test(values.phone.trim()))
    errors.phone = 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9, without +91 or spaces.';

  if (values.industry && !industryOptions.some(option => option.value === values.industry))
    errors.industry = 'Please select an industry from the list.';

  const requirement = values.requirement.trim();
  if (requirement && (requirement.length > 200 || !/[\p{L}\p{N}]/u.test(requirement)))
    errors.requirement = 'Enter a requirement containing letters or numbers (up to 200 characters).';

  const message = values.message.trim();
  if (message.length < 10 || message.length > 2000 || !/\p{L}/u.test(message))
    errors.message = 'Please describe your business problem in 10 to 2,000 characters, including words.';
  return errors;
}
