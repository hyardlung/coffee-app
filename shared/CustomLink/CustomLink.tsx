import { StyleSheet } from 'react-native';
import { Link, LinkProps } from 'expo-router';
import { Colors, Fonts } from '../tokens';

export default function CustomLink({
  text,
  ...props
}: LinkProps & { text: string }) {
  return (
    <Link style={styles.link} {...props}>
      {text}
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
    color: Colors.primary,
  },
});
