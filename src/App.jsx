/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './navigation/RootNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

/**
 * Providers
 * @param {{children: ReactNode}} props 
 * @returns 
 */
function AppProviders({ children }) {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {children}
      </PaperProvider>
    </SafeAreaProvider>
  )
}

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <AppProviders>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </AppProviders>
  );
}
