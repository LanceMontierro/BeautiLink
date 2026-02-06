import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.row}>
            <Text style={styles.text}>Hello, (Username)</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.noti}>
                <Ionicons name="notifications" size={24} color="#fff"/>
            </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        top: 68,
        left: 22,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 310,
        paddingHorizontal: 2,
    },
    noti:{
        backgroundColor: "#0F3D3E",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    text: {
        fontWeight: "700",
        fontSize: 20,
        color: "#d6be6d"
    }
})
