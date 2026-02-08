import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onSearch }: any) {
    const [query, setQuery] = useState("");

    const handleChange = (text: string) => {
        setQuery(text);
        onSearch(text);
    };

    return (
        <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput
                placeholder="Search clients, bookings..."
                value={query}
                onChangeText={handleChange}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 14,
        elevation: 2,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
});