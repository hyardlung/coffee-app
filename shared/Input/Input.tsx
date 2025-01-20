import { TextInput, TextInputProps, StyleSheet, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import SearchIcon from "../../assets/icons/search_icon";

export function Input({isSearch, ...props}: TextInputProps & { isSearch?: boolean }) {
  return (
    <View>
      <TextInput 
        style={[
          styles.input,
          {paddingLeft: isSearch ? 48 : 16,}
        ]} 
        placeholderTextColor={Colors.textGray}
        {...props} 
      />
      {isSearch && <SearchIcon style={styles.searchIcon}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 52,
    padding: 16,
    fontSize: Fonts.f14,
    backgroundColor: Colors.inputBackground,
    borderRadius: Radius.r16,
    color: Colors.white
  },
  searchIcon: {
    position: "absolute",
    left: 16,
    top: 16
  }
})