import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function Sample() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sample</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDDFD4",
    },
    text: {
        fontSize: 20,
        alignSelf: "center",
        justifyContent: "center",
    }
})
