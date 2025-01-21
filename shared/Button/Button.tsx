import { useRef } from "react";
import { Pressable, PressableProps, Text, StyleSheet, Animated, GestureResponderEvent } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Button({title, ...props}: PressableProps & {title: string}) {
  const animatedValue = useRef(new Animated.Value(100)).current
  const bgColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary]
  })

  const pressButtonIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    }).start()
    if (props.onPressIn) props.onPressIn(e)
  }

  const pressButtonOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 150,
      useNativeDriver: true
    }).start()
    if (props.onPressOut) props.onPressOut(e)
  }


  return (
    <Pressable {...props} onPressIn={pressButtonIn} onPressOut={pressButtonOut}>
      <Animated.View style={{ 
        ...styles.button, backgroundColor: bgColor 
      }}>
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.r16,
  },
  buttonText: {
    fontSize: Fonts.f16,
    fontWeight: 600,
    color: Colors.white,
  }
})