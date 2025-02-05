import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

import { Colors, Fonts, Gaps } from '../shared/tokens';
import NotFoundImage from '../assets/images/404.png';
import CustomLink from '../shared/CustomLink/CustomLink';

export default function NotFound() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={NotFoundImage} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>
          Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
          приложения.
        </Text>
        <CustomLink text="На главный экран" href="/" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  image: {
    width: 214,
    height: 328,
  },
  text: {
    maxWidth: 300,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
    color: Colors.white,
    textAlign: 'center',
  },
});
