import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function User() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, (Username)</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 68,
        left: 22,
    },
    text: {
        fontWeight: "700",
        fontSize: 20,
        color: "#d6be6d"
    }
})
