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
          headerShown: true,
          contentStyle: {
            backgroundColor: Colors.whiteBackground,
            paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.black,
            },
          }}
        />
        <Stack.Screen
          name="catalog/index"
          options={{
            headerShown: false,
            title: '',
            contentStyle: {
              paddingTop: insets.top,
              backgroundColor: Colors.black,
            },
          }}
        />
        <Stack.Screen
          name="catalog/[coffee]"
          options={{
            title: 'Описание',
          }}
        />
        <Stack.Screen
          name="address"
          options={{
            title: 'Изменить адрес',
          }}
        />
        <Stack.Screen
          name="order"
          options={{
            title: 'Заказ',
          }}
        />
        <Stack.Screen
          name="success"
          options={{
            title: 'Заказ оформлен!',
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.black,
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
