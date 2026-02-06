import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function Tryon() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tryon</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#DDDFD4',
    },
    text: {
        fontSize: 50
    }
})
