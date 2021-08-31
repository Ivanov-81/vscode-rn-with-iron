import React, { useState } from "react";
import axios from "axios";
import {
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    Alert,
    Platform,
    ToastAndroid,
} from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Http } from "../classes/http";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL, LOGIN_URL } from "../urls";
import { THEME } from "../theme";

export const LoginScreen = ({ navigation }) => {
    const [login, setLogin] = useState("admin");
    const [password, setPassword] = useState("123654789");

    const entryHandler = () => {
        let status = true;
        let arr = [];

        if (login.trim().length < 3) {
            arr.push("Логин не должен быть меньше 3-х символов.");
            status = false;
        }

        if (password.trim().length < 8) {
            arr.push("Пароль не должен быть меньше 8-и символов.");
            status = false;
        }

        if (status) {
            onSignIn();
        } else {
            Alert.alert("Ошибка!", `${arr.join("\n")}`);
        }
    };

    const onSignIn = async () => {
        const obj = {
            login,
            password,
            client_type: "mobile",
            _xsrf: "2|051ab48e|8f60a686cf634c07f674cd34dc7fa5ee|1629964323",
        };

        if(login === "admin" && password === "123654789") {
            navigation.navigate("MainScreen");
        }

        // try {
        //     const data = await Http.post(BASE_URL + LOGIN_URL, obj);
        //     console.log(data);
        // } catch (error) {
        //     if (Platform.OS === "android") {
        //         ToastAndroid.show(data.error, ToastAndroid.SHORT);
        //     } else {
        //         Alert.alert("Ошибка!", error);
        //     }
        // }

        // axios
        //     .post(BASE_URL + LOGIN_URL, obj, headers, { mode: "no-cors" })
        //     .then(({ data }) => {
        //         console.log(data);
        //         if (data.result) {
        //             // AsyncStorage.setItem("TOKEN", data.data);
        //             navigation.navigate("MainScreen");
        //         } else {
        //             if (Platform.OS === "android") {
        //                 ToastAndroid.show(data.error, ToastAndroid.SHORT);
        //             } else {
        //                 Alert.alert("Ошибка!", data.error);
        //             }
        //         }
        //     });
    };

    return (
        <View style={styles.center}>
            <ImageBackground
                source={require("../../assets/fon-min.jpg")}
                resizeMode="stretch"
                style={styles.image}
            >
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        value={login}
                        onChangeText={setLogin}
                        placeholder="Введите логин..."
                    />
                    <TextInput
                        style={[
                            styles.input,
                            { marginTop: 10, marginBottom: 10 },
                        ]}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Введите пароль..."
                        secureTextEntry={password ? true : false}
                    />
                    <AppButton
                        onPress={entryHandler}
                        style={styles.entry}
                        color={"transparent"}
                    >
                        <MaterialCommunityIcons
                            name="login-variant"
                            size={26}
                        />
                        <AppText style={styles.text}> Войти</AppText>
                    </AppButton>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    block: {
        padding: 40,
        width: "100%",
    },
    input: {
        width: "100%",
        height: 56,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: THEME.MAIN_DARK_COLOR,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: THEME.MAIN_DARK_COLOR,
    },
    entry: {
        width: "100%",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        height: "100%",
        fontSize: 18,
    },
});
