import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppDrawer } from "../components/drawer/AppDrawer";
import { CONST } from "../constants";

import { LoginScreen } from "../screens/LoginScreen";
import { MainScreen } from "../screens/MainScreens";
import { ReportsScreen } from "../screens/ReportsScreen";
import { PermissionsScreen } from "../screens/PermissionsScreen";
import { LogsScreen } from "../screens/LogsScreen";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="MainScreen"
            drawerContent={(props) => <AppDrawer {...props} />}
            screenOptions={CONST.screenOptions}
        >
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
            <Drawer.Screen name="MainScreen" component={MainScreen} />
            <Drawer.Screen name="ReportsScreen" component={ReportsScreen} />
            <Drawer.Screen name="PermissionsScreen" component={PermissionsScreen} />
            <Drawer.Screen name="LogsScreen" component={LogsScreen} />
        </Drawer.Navigator>
    );
};
