import { FC } from "react";
import { Text, StyleSheet, Platform } from "react-native";

const Title: FC = (props) => {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    maxWidth: '80%',
    width: 300,
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: "#fff",
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: '#fff',
    padding: 12,
  },
})