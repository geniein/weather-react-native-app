import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Loading(){
    return <View style={styles.container}>
        <Text>Getting Weather Info</Text>
    </View>;
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color:"#FFFFFF",
        fontSize: 30
    }
});