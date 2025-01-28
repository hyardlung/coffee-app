import { View, Text, StyleSheet } from 'react-native';
import CoffeeCard from '../../shared/CoffeeCard/CoffeeCard';
import Cover from '../../assets/icon.png';
import CustomLink from '../../shared/CustomLink/CustomLink';
import { Colors } from '../../shared/tokens';

export default function Catalog() {
  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Адрес</Text>
        <CustomLink text="Редактировать адрес" href="/address" />
      </View>
      <View style={styles.container}>
        <Text>Catalog</Text>
        <CoffeeCard
          url="/catalog/capuchino"
          img={Cover}
          title="Capuchino"
          subtitle="With soy milk"
          price={5}
          rating={4.5}
        />
        <View style={styles.link}>
          <CustomLink text="Заказ" href="/order" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.whiteBackground,
  },
  topContainer: {
    padding: 30,
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
  link: {
    marginTop: 'auto',
  },
});
