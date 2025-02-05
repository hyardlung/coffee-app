import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { Colors } from '../shared/tokens';
import Button from '../shared/Button/Button';

export default function Address() {
  const router = useRouter();

  const goToCatalog = () => {
    router.push({
      pathname: '/catalog',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Сохранить" onPress={goToCatalog} />
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
