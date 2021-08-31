import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PermissionsScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>PermissionsScreen</Text>
        </View>
    );
};

PermissionsScreen.navigationOptions = {
    headerTitle: "Доступ",
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
