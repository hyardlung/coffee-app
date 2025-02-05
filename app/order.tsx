import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { Colors } from '../shared/tokens';
import Button from '../shared/Button/Button';

export default function Order() {
  const router = useRouter();

  const goToCatalog = () => {
    router.push({
      pathname: '/success',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Заказать" onPress={goToCatalog} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.whiteBackground,
  },
});
