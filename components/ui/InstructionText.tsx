import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText: FC<{style?: {}}> = (props) => {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
