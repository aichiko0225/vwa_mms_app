import base from 'loglevel';

const defaultLevel = __DEV__ ? 'debug' : 'warn';
base.setLevel(defaultLevel);

export const setLevel = (level) => { try { base.setLevel(level); } catch {} };
export const getLevel = () => base.getLevel();

const stamp = () => new Date().toISOString();

export const getLogger = (name = 'app') => {
  const l = base.getLogger(name);
  try { l.setLevel(defaultLevel); } catch {}
  return {
    debug: (message, meta) => l.debug(`[${stamp()}] ${message}`, meta),
    info: (message, meta) => l.info(`[${stamp()}] ${message}`, meta),
    warn: (message, meta) => l.warn(`[${stamp()}] ${message}`, meta),
    error: (message, meta) => l.error(`[${stamp()}] ${message}`, meta),
  };
};

export default { getLogger, setLevel, getLevel };