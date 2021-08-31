import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
    FlatList,
    SafeAreaView,
} from "react-native";
import { THEME } from "../../theme";
import { AppButton } from "../ui/AppButton";

export const AppDrawer = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [buttons, setButtons] = useState([
        {
            id: "MainScreen",
            title: "Главная",
            buttons: [],
            toValue: 0,
            height: 0,
        },
        {
            id: "CatalogsScreen",
            title: "Справочники",
            buttons: ["Пользователи", "Магазины"],
            toValue: 0,
            height: 0,
        },
        {
            id: "DocumentsScreen",
            title: "Документы",
            buttons: ["Акции", "Распоряжения"],
            toValue: 0,
            height: 0,
            height: 0,
        },
        {
            id: "ReportsScreen",
            title: "Отчёты",
            buttons: ["Продажи Детальный", "Остатки"],
            toValue: 0,
        },
        {
            id: "PermitionsScreen",
            title: "Права доступа",
            buttons: [],
            toValue: 0,
            height: 0,
        },
        {
            id: "LogsScreen",
            title: "Журнал",
            buttons: [],
            toValue: 0,
            height: 0,
        },
        {
            id: "ActionsScreen",
            title: "Действия",
            buttons: ["Календарь", "Обновление данных"],
            toValue: 0,
            height: 0,
        },
        {
            id: "AdminScreen",
            title: "Админка",
            buttons: ["Загрузка ПО", "POS данные"],
            toValue: 0,
            height: 0,
        },
    ]);

    // const closeDrawer = () => {
    //   props.drawer.current.closeDrawer();
    // };

    const fadeSwitch = (it, val, len) => {
        if (len) {
            setButtons(
                buttons.map((i) => {
                    if (i.id === it.id) {
                        i.toValue = val === 0 ? 1 : 0;
                        i.height = val === 0 ? 35 * i.buttons.length : 0;
                    }
                    return i;
                })
            );
            Animated.timing(fadeAnim, {
                toValue: val === 0 ? 1 : 0,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        } else {
            switchScreen(it.title, it.id);
        }
    };

    const switchScreen = (it, index) => {
        navigation.navigate(`${index}`, { name: "Журнал" });
    };

    const renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.buttonWrap} key={item.id + "btn"}>
                    <AppButton
                        color={THEME.MAIN_BLACK_COLOR}
                        onPress={() =>
                            fadeSwitch(item, item.toValue, item.buttons.length)
                        }
                        fontSize={18}
                        justifyContent={"flex-start"}
                    >
                        {item.title}
                    </AppButton>
                </View>

                <SafeAreaView style={styles.container2} key={item.id}>
                    <Animated.View
                        style={[
                            styles.fadingContainer,
                            {
                                opacity: item.toValue,
                                height: item.height,
                            },
                        ]}
                    >
                        {item.buttons.map((it, index, i) => (
                            <AppButton
                                key={index}
                                color={THEME.MAIN_BLACK_COLOR}
                                onPress={() => switchScreen(it, index, item.title)}
                                fontSize={15}
                                justifyContent={"flex-start"}
                                paddingLeft={30}
                            >
                                {it}
                            </AppButton>
                        ))}
                    </Animated.View>
                </SafeAreaView>
            </>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageWrap}>
                <Image
                    source={require("../../../assets/logo.jpg")}
                    style={styles.image}
                />
                <Text style={styles.menu}>Меню</Text>
            </View>
            <SafeAreaView style={styles.safeAreaView}>
                <FlatList
                    data={buttons}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 0,
        backgroundColor: THEME.MAIN_BLACK_COLOR,
    },
    imageWrap: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        height: 55,
        overflow: "hidden",
        position: "relative",
        borderBottomColor: THEME.GINGER_COLOR,
        borderBottomWidth: 3,
    },
    image: {
        resizeMode: "stretch",
        position: "absolute",
        left: 0,
        width: 880,
        height: 53,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "absolute",
    },
    menu: {
        width: 150,
        height: "100%",
        color: THEME.MAIN_DARK_COLOR,
        fontSize: 24,
        // fontFamily: "OpenBold",
        paddingTop: 13,
        paddingLeft: 25,
        textAlign: "left",
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: THEME.MAIN_BLACK_COLOR,
    },
    container2: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        backgroundColor: THEME.MAIN_BLACK_COLOR,
    },
    buttonWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        textTransform: "none",
        backgroundColor: THEME.MAIN_BLACK_COLOR,
    },
    fadingContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        width: "100%",
    },
    fadingText: {
        fontSize: 14,
        color: THEME.MAIN_COLOR,
    },
});
