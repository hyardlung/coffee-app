import {
  ImageBackground, 
  StyleSheet, 
  Text,
  View,
} from "react-native";
import mainBG from "./assets/main_bg.png";
import { Colors, Fonts } from "./shared/tokens";
import { Button } from "./shared/Button/Button";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={mainBG} resizeMode="contain" style={styles.bg}/>
      <LinearGradient
        colors={['transparent', `${Colors.black}`]}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Один из самых вкусных кофе в городе!</Text>
        <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        <Button title="Начать" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colors.black,
  },
  bg: {
    position: "absolute",
    top: -120,
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 30,
    paddingTop: 0
  },
  gradient: {
    marginBottom: -10,
    height: 80
  },
  title: {
    marginBottom: 8,
    fontFamily: "Helvetica",
    fontSize: Fonts.f34,
    lineHeight: 34,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.white
  },
  subtitle: {
    marginBottom: 24,
    fontFamily: "Helvetica",
    fontSize: Fonts.f14,
    lineHeight: 18,
    fontWeight: "400",
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.textGray,
  },
});
