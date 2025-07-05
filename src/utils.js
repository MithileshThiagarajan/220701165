

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
export const isValidShortcode = (code) => /^[a-zA-Z0-9]{1,10}$/.test(code);
export const generateShortcode = () => Math.random().toString(36).substring(2, 8);
export const getExpiryDate = (minutes) => {
  const d = new Date();
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
};
export const isExpired = (iso) => new Date() > new Date(iso);