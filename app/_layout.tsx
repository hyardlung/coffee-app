import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';
import SoraRegular from '../assets/fonts/Sora-Regular.ttf';
import SoraSemiBold from '../assets/fonts/Sora-SemiBold.ttf';
import { useEffect } from 'react';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded, error] = useFonts({
    'Sora-Regular': SoraRegular,
    'Sora-SemiBold': SoraSemiBold,
  });

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
            backgroundColor: Colors.whiteBackground,
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
        <Stack.Screen
          name="+not-found"
          options={{
            contentStyle: {
              backgroundColor: Colors.black,
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
