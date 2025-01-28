import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Button from '../../shared/Button/Button';

export default function CoffeePage() {
  const router = useRouter();
  const { coffee } = useLocalSearchParams();

  const addToCart = () => {
    router.push({
      pathname: '/cart',
    });
  };

  return (
    <View>
      <Text>{coffee}</Text>
      <Button title="В корзину" onPress={addToCart} />
    </View>
  );
}
