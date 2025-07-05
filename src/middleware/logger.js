

export const logEvent = (eventType, payload) => {
  const log = { timestamp: new Date().toISOString(), eventType, payload };
  document.dispatchEvent(new CustomEvent('app-log', { detail: log }));
};

