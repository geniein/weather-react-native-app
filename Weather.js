import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const WeatherOptions = {
    Thurderstom: {
        iconName: "weather-",
        gradient: ["#", "#"]
                  },
    Drizzle: {
        iconName: "weather-",
        gradient: ["#", "#"]
            },
    Rain: {
        iconName: "weather-",
        gradient: ["#", "#"]
            },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#", "#"]
            },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#54c322", "#fdc12d"]
            },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#", "#"]
            }
  }

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
        colors={WeatherOptions.Clear.gradient}
        style={styles.container}
        >
        <View style={styles.container}        
            color="white">
            <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={90}
                        name={WeatherOptions.Clear.iconName}
                        color="white"/>
                    <Text style={styles.temp}>
                        Temperature : {temp}
                    </Text>
                </View>
                <View style={styles.halfContainer}>
                    <Text style={styles.title}>You get the clear sky</Text>
                    <Text style={styles.subTile}>How Lucky day it is!</Text>
                </View>
            </View>
        </LinearGradient>
    )
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thurderstom",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    temp: {
        fontSize: 20,
        color: "white"
    },
    title: {
        fontSize: 44,
        fontWeight: "300",
        color: "white"
    },
    subTile: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    }
})