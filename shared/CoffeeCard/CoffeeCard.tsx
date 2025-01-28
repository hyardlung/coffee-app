import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts, Gaps, Radius } from '../tokens';
import Star from '../../assets/icons/star_icon';

interface CoffeeCardProps {
  url: string;
  img: ImageSourcePropType;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
}

export default function CoffeeCard({
  url,
  img,
  title,
  subtitle,
  price,
  rating,
}: CoffeeCardProps) {
  const router = useRouter();

  const goToCoffee = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.link}>
        <Pressable onPress={() => goToCoffee(url)}>
          <Image source={img} style={styles.image} />
        </Pressable>
        <View style={styles.ratingWrap}>
          <Star />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 240,
    padding: 4,
    gap: Gaps.g12,
    borderRadius: Radius.r16,
    backgroundColor: Colors.white,
  },
  link: {
    position: 'relative',
    borderRadius: Radius.r16,
    overflow: 'hidden',
  },
  image: {
    width: 141,
    height: 132,
  },
  ratingWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderBottomRightRadius: Radius.r16,
    backgroundColor: Colors.ratingBackground,
  },
  rating: {
    fontFamily: Fonts.semiBold,
    fontSize: Fonts.f10,
    color: Colors.white,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: Fonts.f16,
    color: Colors.textBlack,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.f12,
    color: Colors.textGray,
  },
  price: {
    fontFamily: Fonts.semiBold,
    fontSize: Fonts.f18,
    color: Colors.textGreen,
  },
});
