import base from 'loglevel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultLevel = __DEV__ ? 'debug' : 'warn';
base.setLevel(defaultLevel);

const LEVEL_KEY = 'LOG_LEVEL';

export const setLevel = (level) => { try { base.setLevel(level); AsyncStorage.setItem(LEVEL_KEY, String(level)); } catch {} };
export const getLevel = () => base.getLevel();

(async () => { try { const saved = await AsyncStorage.getItem(LEVEL_KEY); if (saved) base.setLevel(saved); } catch {} })();

export const getLogger = (name = 'app') => {
  const l = base.getLogger(name);
  return l
};

export const setLoggerLevel = (name, level) => { try { base.getLogger(name).setLevel(level); } catch {} };

const logger = getLogger('app');

export default logger
