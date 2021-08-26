import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Animated,
  FlatList,
  SafeAreaView,
} from "react-native";
import { THEME } from "../../theme";

export const Drawer = ({ drawer }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [buttons, setButtons] = useState([
    {
      id: 1,
      title: "Справочники",
      buttons: ["Пользователи", "Магазины"],
      toValue: 0,
    },
    {
      id: 2,
      title: "Документы",
      buttons: ["Акции", "Распоряжения"],
      toValue: 0,
    },
    {
      id: 3,
      title: "Отчёты",
      buttons: ["Продажи Детальный", "Остатки"],
      toValue: 0,
    },
    { id: 4, title: "Права доступа", buttons: [], toValue: 0 },
    { id: 5, title: "Журнал", buttons: [], toValue: 0 },
    {
      id: 6,
      title: "Действия",
      buttons: ["Календарь", "Обновление данных"],
      toValue: 0,
    },
    {
      id: 7,
      title: "Админка",
      buttons: ["Загрузка ПО", "POS данные"],
      toValue: 0,
    },
  ]);

  // const closeDrawer = () => {
  //   drawer.current.closeDrawer();
  // };

  const fadeSwitch = (id, val) => {
    setButtons(buttons.map((i) => {
      if (i.id === id) {
        i.toValue = val === 0 ? 1 : 0;
      }
      return i;
    }))
    Animated.timing(fadeAnim, {
      toValue: val === 0 ? 1 : 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.buttonWrap}>
          <Button
            title={item.title}
            onPress={() => fadeSwitch(item.id, item.toValue)}
            style={{
              position: "relative",
              textTransform: "none",
              backgroundColor: THEME.MAIN_DARK_COLOR,
            }}
          />
        </View>

        <SafeAreaView style={styles.container2} key={item.id}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: item.toValue,
              },
            ]}
          >
            {item.buttons.map((it) => (
              <Text style={styles.fadingText}>{it}</Text>
            ))}
          </Animated.View>
        </SafeAreaView>
      </>
    );
  };

  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.imageWrap}>
        <Image
          source={require("../../../assets/logo.jpg")}
          style={styles.image}
        />
        <Text style={styles.menu}>Меню</Text>
      </View>
      <FlatList
        data={buttons}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "red",
  },
  navigationContainer: {
    backgroundColor: THEME.MAIN_BLACK_COLOR,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
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
    fontFamily: "open-bold",
    paddingTop: 13,
    paddingLeft: 25,
    textAlign: "left",
  },
  buttonWrap: {
    textTransform: "none",
    backgroundColor: THEME.MAIN_DARK_COLOR,
  },
  fadingContainer: {
    padding: 0,
  },
  fadingText: {
    fontSize: 16,
    color: THEME.MAIN_COLOR,
  },
});
