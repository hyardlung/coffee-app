import { useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import { Colors, Fonts } from '../shared/tokens';
import Button from '../shared/Button/Button';
import mainBG from '../assets/main_bg.png';

export default function Intro() {
  const router = useRouter();
  const animatedTransition = useRef(new Animated.Value(-60)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedBgOpacity = useRef(new Animated.Value(0)).current;
  const animatedBgScale = useRef(new Animated.Value(0.9)).current;

  const handlePressStart = () => {
    router.push({
      pathname: '/catalog',
    });
  };

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animatedTransition, {
        toValue: 0,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedBgOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedBgScale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    startAnimation();
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.bgWrap,
          opacity: animatedBgOpacity,
          transform: [
            {
              scale: animatedBgScale,
            },
          ],
        }}
      >
        <ImageBackground source={mainBG} resizeMode="contain" style={styles.bg} />
      </Animated.View>
      <LinearGradient
        colors={['transparent', `${Colors.black}`]}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Animated.Text
          style={{
            ...styles.title,
            opacity: animatedOpacity,
            transform: [{ translateY: animatedTransition }],
          }}
        >
          Один из самых вкусных кофе в городе!
        </Animated.Text>
        <Text style={styles.subtitle}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Button title="Начать" onPress={handlePressStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -120,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 30,
    paddingTop: 0,
  },
  gradient: {
    marginBottom: -10,
    height: 80,
  },
  title: {
    marginBottom: 8,
    fontFamily: Fonts.semiBold,
    fontSize: Fonts.f34,
    fontWeight: 600,
    lineHeight: 34,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.white,
  },
  subtitle: {
    marginBottom: 24,
    maxWidth: 315,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.textGray,
  },
});
