import { FC } from "react";
import { View, Text } from "react-native";

const PrimaryButton: FC<{children?: React.ReactNode}> = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
};

export default PrimaryButton;
