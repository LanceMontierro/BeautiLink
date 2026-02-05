import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

export default function Notification() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="notifications" size={24} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        left: 290,
        backgroundColor: "#0F3D3E",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
})
