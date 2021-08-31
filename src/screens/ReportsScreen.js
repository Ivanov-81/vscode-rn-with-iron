import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNotification } from "react-native-internal-notification";
import { DATA } from "../data/data";
import { Post } from "../components/reports/Post";
import { THEME } from "../theme";

export const ReportsScreen = ({ navigation }) => {
    const notification = useNotification();

    const handleNotificationTestClick = useCallback(() => {
        notification.showNotification({
            title: "My first notification",
            message: "Hello from my first message",
            icon: <FontAwesome name="check-circle" size={45} />,
            onPress: () => {
                alert("Pressed");
            },
        });
    }, [notification]);

    const goToPost = () => {
        navigation.navigate("Post");
    };

    useEffect(() => {
        handleNotificationTestClick();
    }, []);

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Post check={item} />}
            />
        </View>
    );
};

ReportsScreen.navigationOptions = {
    headerTitle: "Отчёты",
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: THEME.MAIN_COLOR,
        padding: 10,
    },
});
