import React, { useState } from "react";
import { StatusBar } from "react-native";
import { bootstrap } from "./src/bootstrap";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { NotificationProvider } from "react-native-internal-notification";
import { THEME } from "./src/theme";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (isReady) {
    return (
      <AppLoading
        startAsinc={bootstrap}
        onFinish={() => setIsReady(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NotificationProvider>
      <StatusBar
        animated={true}
        backgroundColor={THEME.MAIN_BLACK_COLOR}
        color={THEME.MAIN_DARK_COLOR}
      />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NotificationProvider>
  );
}
