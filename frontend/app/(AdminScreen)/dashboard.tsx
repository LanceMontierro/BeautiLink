import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Detailsscreen from "./detailsscreen";
import ClientList from "./clientList";
import {router, useRouter} from "expo-router";

export default function Dashboard({ navigation }) {
   const router = useRouter();

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#2E2416" />
                </TouchableOpacity>

                <Text style={styles.title}>Dashboard</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#2F4A33"
                />
                </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
                <Ionicons name="search" size={18} color="#9A8A4B" />
                <TextInput
                    placeholder="Search here"
                    placeholderTextColor="#9A8A4B"
                    style={styles.searchInput}
                />
            </View>

            <View style={styles.quickRow}>
                {["Sales", "Booking", "Service List", "Members"].map((item) => (
                    <View key={item} style={styles.quickCard}>
                        <Ionicons name="briefcase-outline" size={22} color="#DDDFD4" />
                        <Text style={styles.quickText}>{item}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>

            <View style={styles.appCard}>

                <View style={styles.appHeader}>
                    <Text style={styles.appTime}>2:00 PM</Text>

                    <TouchableOpacity onPress={() => router.push("/detailsscreen")}>
                        <Ionicons
                            name="chevron-forward-circle-outline"
                            size={22}
                            color="#2E2416"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.client}>Juan Dela Cruz</Text>
                <Text style={styles.price}>Haircut + Beard</Text>

                <View style={styles.appActions}>
                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={() => console.log("Cancelled")}
                    >
                        <Text style={{ color: "#2E2416", fontWeight: "600" }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.confirmBtn}
                        onPress={() => console.log("Confirmed")}
                    >
                        <Text style={{ color: "#DDDFD4", fontWeight: "600" }}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDDFD4",
        padding: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        justifyContent: "space-between",
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#2E2416",
    },

    searchBox: {
        flexDirection: "row",
        backgroundColor: "#F7F7F0",
        padding: 12,
        borderRadius: 14,
        alignItems: "center",
        marginBottom: 15,
        elevation: 3,
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
        color: "#2E2416",
    },

    quickRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 20,
    },
    quickCard: {
        width: "47%",
        backgroundColor: "#2F4A33",
        padding: 16,
        borderRadius: 18,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        elevation: 4,
    },
    quickText: {
        color: "#DDDFD4",
        fontWeight: "700",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2E2416",
        marginBottom: 10,
    },

    appCard: {
        backgroundColor: "#F7F7F0",
        borderRadius: 18,
        padding: 14,
        marginBottom: 12,
        elevation: 3,
    },
    appHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    appTime: {
        backgroundColor: "#9A8A4B",
        color: "#DDDFD4",
        padding: 6,
        borderRadius: 8,
        fontWeight: "600",
    },
    walkin: {
        color: "#9A8A4B",
        fontWeight: "600",
    },

    client: {
        fontWeight: "700",
        marginTop: 8,
        color: "#2E2416",
    },
    price: {
        color: "#555",
    },

    appActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    cancelBtn: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#DDDFD4",
        flex: 1,
        marginRight: 8,
        alignItems: "center",
    },
    confirmBtn: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#2F4A33",
        flex: 1,
        alignItems: "center",
    },
});