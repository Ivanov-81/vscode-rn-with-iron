import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreens";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
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
    },
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
