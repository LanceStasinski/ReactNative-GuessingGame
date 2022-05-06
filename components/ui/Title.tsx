import { FC } from "react";
import { Text, StyleSheet } from "react-native";

const Title: FC = (props) => {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: "#fff",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
  },
})