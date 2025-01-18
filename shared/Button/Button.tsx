import { useState } from "react";
import { Pressable, PressableProps, Text, StyleSheet, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Button({title, ...props}: PressableProps & {title: string}) {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  return (
    <Pressable 
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...props}
    >
      <View
        style={[
          styles.button,
          {backgroundColor: isPressed ? Colors.primaryHover : Colors.primary }
        ]} 
      >
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </View>
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