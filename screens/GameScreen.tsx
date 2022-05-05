import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const GameScreen: FC = () => {
  return (
    <View style={styles.screen} >
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  }
})