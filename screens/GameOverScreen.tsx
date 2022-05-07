import { FC } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen: FC<{
  rounds: number;
  userNumber: number | string;
  onStartNewGame: () => void;
}> = ({ rounds, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = StyleSheet.create({
    image: {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize/2,
    },
  });

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, imageStyle.image]}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 400,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
