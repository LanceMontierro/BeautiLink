import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Stack} from "expo-router";

export default function _Layout() {
    return (
           <Stack>
               <Stack.Screen name="logsign" options={{ headerShown: false }} />
           </Stack>
    )
}
const styles = StyleSheet.create({})
