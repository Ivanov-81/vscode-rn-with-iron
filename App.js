import React, { useState, useRef } from "react";
import { StatusBar, DrawerLayoutAndroid } from "react-native";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { NotificationProvider } from "react-native-internal-notification";
import { THEME } from "./src/theme";
import { Drawer } from "./src/components/drawer/Drawer";

export default function App() {
  const drawer = useRef(null);
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
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <Drawer drawer={drawer} />}
      >
        <AppNavigation />
      </DrawerLayoutAndroid>
    </NotificationProvider>
  );
}
