import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      // initialRouteName="index"
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Заказ',
        }}
      />
    </Tabs>
  );
}
