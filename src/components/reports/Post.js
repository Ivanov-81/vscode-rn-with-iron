import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { FontAwesome } from '@expo/vector-icons';

export const Post = ({ check }) => {
  return (
    <View style={styles.check}>
      <Text style={styles.title} numberOfLines={1}>
        {check.tt}
      </Text>
      <View style={styles.block1}>
        <Text style={styles.trader}>{check.trader}</Text>
        <Text style={styles.date}>
          {new Date(check.time * 1000).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.block2}>
          {
              check.summ_beznal
              ? <FontAwesome name="credit-card" size={24} color={THEME.GRAY_DARK_COLOR} />
              : <FontAwesome name="money" size={24} color={THEME.GRAY_DARK_COLOR} />
          }
        
      </View>
      <Text style={styles.info}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  check: {
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.GRAY_DARK_COLOR,
    padding: 8,
  },
  title: {
    color: THEME.MAIN_BLACK_COLOR,
    fontFamily: "open-bold",
    minHeight: 20,
    fontSize: 13,
  },
  trader: {
    color: THEME.MAIN_BLACK_COLOR,
    fontFamily: "open-regular",
    fontSize: 13,
  },
  block1: {
    flexDirection: "row",
  },
  block2: {
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 5
  },
  date: {
    color: THEME.MAIN_BLACK_COLOR,
    fontFamily: "open-regular",
    fontSize: 13,
    marginLeft: 15
  },
  info: {
    color: THEME.MAIN_BLACK_COLOR,
    fontFamily: "open-regular",
    fontSize: 13,
  },
});
