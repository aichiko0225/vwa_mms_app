import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getSystemLanguage } from '../NativeModules/I18nSystemInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en';
import zh from './locales/zh';

const resources = {
  en,
  zh
};

const KEY = 'APP_LANGUAGE';

const initI18n = async () => {
  let stored = null;
  try { stored = await AsyncStorage.getItem(KEY); } catch {}
  let language = stored;
  if (!language) {
    try {
      const sys = await getSystemLanguage();
      language = sys && String(sys).startsWith('zh') ? 'zh' : 'en';
    } catch { language = 'en'; }
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

  try { await AsyncStorage.setItem(KEY, language); } catch {}
  i18n.on('languageChanged', async (lng) => {
    const v = (lng && String(lng).startsWith('zh')) ? 'zh' : 'en';
    try { await AsyncStorage.setItem(KEY, v); } catch {}
  });
};

initI18n();

export default i18n;
