import { NativeModules } from 'react-native';
const { I18nSystemInfo } = NativeModules;

export async function getSystemLanguage() {
  if (!I18nSystemInfo) {
    console.warn("I18nSystemInfo module not available. Defaulting to 'en'.");
    return 'en';
  }
  if (!I18nSystemInfo.getSystemLanguage) {
    console.warn("I18nSystemInfo.getSystemLanguage method not available. Defaulting to 'en'.");
    return 'en';
  }
  try {
    return await I18nSystemInfo.getSystemLanguage();
  } catch (error) {
    console.warn("Error calling I18nSystemInfo.getSystemLanguage. Defaulting to 'en'.", error);
    return 'en';
  }
}