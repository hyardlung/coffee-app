import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';
import SoraRegular from '../assets/fonts/Sora-Regular.ttf';
import SoraSemiBold from '../assets/fonts/Sora-SemiBold.ttf';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded, error] = useFonts({
    'Sora-Regular': SoraRegular,
    'Sora-SemiBold': SoraSemiBold,
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.white,
            paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            contentStyle: {
              backgroundColor: Colors.black,
            },
          }}
        />
        <Stack.Screen name="main" />
      </Stack>
    </SafeAreaProvider>
  );
}
