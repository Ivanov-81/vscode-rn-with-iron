import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { CHART } from "../data/chart";
import { THEME } from "../theme";

import { LineChart } from "react-native-chart-kit";

import { AppTextBold } from "../components/ui/AppTextBold";
import { AppCard } from "../components/ui/AppCard";
import { useEffect } from "react/cjs/react.development";

const height = 220;

export const MainScreen = ({ navigation }) => {
    const [loader_chart, setLoaderChart] = useState(true);
    const [labels, setLabels] = useState([]);
    const [dataL, setDataL] = useState([]);
    const [dataN, setDataN] = useState([]);
    let max = 0;
    let del = 1000;
    let fl = 3;

    useEffect(() => {
        setTimeout(() => {
            if (CHART.result) {
                let labs = [],
                    dtL = [],
                    dtN = [],
                    lb = "";
                CHART.data.forEach((item, ind) => {
                    let date = item.date.split(".");
                    if (lb === "" && ind === 0) {
                        lb = date[1];
                    }
                    if (date[1] === lb) {
                        dtL.push(item.money);
                        labs.push(date[2]);
                    } else {
                        dtN.push(item.money);
                    }
                });
                max = Math.max(...dtL);
                if(max < Math.max(...dtN)) max = Math.max(...dtN);
                if((max).toString().length <= 6) {
                    del = 1000;
                    fl = 3;
                } else {
                    del = 1000000;
                    fl = 4;
                }
                if (labs[labs.length - 1] === "30") labs.push("31");
                setLabels(labs);
                setDataL(dtL);
                setDataN(dtN);
            }
        }, 3000);
    }, []);

    useEffect(() => {
        if (labels.length !== 0 && dataL.length !== 0 && dataN.length !== 0) {
            setLoaderChart(false);
        }
    }, [labels, dataL, dataN]);

    useEffect(() => {
        console.log("Сборка MainScreen");
    });

    return (
        <View style={styles.wrapper}>
            {loader_chart ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <LineChart
                    data={{
                        labels,
                        datasets: [
                            {
                                data: dataN,
                            },
                        ],
                        legend: [`Продажи, ${max.toString().length <= 6 ? "тыс" : "млн"}. ₽`],
                    }}
                    width={Dimensions.get("window").width - 30} // from react-native
                    height={height}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={2} // optional, defaults to 1
                    xAxisInterval={2}
                    horizontalLabelRotation={45}
                    fromZero={false}
                    verticalLabelRotation={0}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) =>
                            `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) =>
                            `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    bezier
                    style={styles.chart}
                    formatYLabel={(item) => {
                        return `${(item / del).toFixed(fl)}`;
                    }}
                    formatXLabel={(item) => {
                        return Number(item)%2 ? item : "";
                    }}
                />
            )}
            <AppCard style={styles.card}>
                <AppTextBold style={styles.text}>Торговые точки</AppTextBold>
            </AppCard>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: THEME.MAIN_COLOR,
        color: THEME.MAIN_BLACK_COLOR,
        padding: 15,
    },
    card: {
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        height,
        padding: 0,
        marginTop: 25,
    },
    chart: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
    },
});
