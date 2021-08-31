import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AppTextBold } from "./AppTextBold";
import { THEME } from "../../theme";

export const AppButton = ({
  children,
  onPress,
  color = THEME.MAIN_DARK_COLOR,
  width = "100%",
  fontSize = 14,
  justifyContent = "center",
  paddingLeft = 15
}) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.5}>
      <View style={{ ...styles.button, backgroundColor: color, width, justifyContent, paddingLeft }}>
        <AppTextBold style={{ ...styles.text, fontSize }}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: THEME.MAIN_DARK_COLOR,
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
