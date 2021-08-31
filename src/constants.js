import { Platform } from "react-native";
import { THEME } from "./theme";

export const CONST = {
    screenOptions: {
        headerStyle: {
            backgroundColor:
                Platform.OS === "android"
                    ? THEME.MAIN_BLACK_COLOR
                    : THEME.MAIN_DARK_COLOR,
        },
        headerTintColor:
            Platform.OS === "android"
                ? THEME.MAIN_DARK_COLOR
                : THEME.MAIN_BLACK_COLOR,
        headerTitleStyle: {
            fontWeight: "normal",
        },
    },
};
