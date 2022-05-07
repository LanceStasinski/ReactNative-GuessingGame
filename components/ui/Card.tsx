import { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card: FC = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4, //creates shadow on Android
    shadowColor: "black", // shadow properties used by iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
