import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export const LogsScreen = ({ route }) => {
    useEffect(() => {
        console.log(route.params.name);
    }, []);

    return (
        <View style={styles.center}>
            <Text>LogsScreen</Text>
        </View>
    );
};

LogsScreen.navigationOptions = ({ navigation }) => {
    console.log("navigation: ", navigation);
    const headerTitle = navigation.getParam("name");
    const stateTitle = navigation.getState("name");
    console.log("headerTitle: ", headerTitle);
    console.log("stateTitle: ", stateTitle);
    return {
        headerTitle,
    };
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
