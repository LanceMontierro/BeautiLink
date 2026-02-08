import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function DetailsScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={handlePress}>
                    <Ionicons name="arrow-back" size={22} color="#2E2416" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Appointment</Text>
                    <View style={{ width: 22 }} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.dateText}>
                        Friday, 21 May, 2024 9:00 - 10.00 AM
                    </Text>

                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>Confirmed</Text>
                        <Ionicons name="chevron-down" size={16} color="#2F4A33" />
                    </View>

                    <Text style={styles.duration}>30 - 45 Min Duration</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.clientRow}>
                        <View style={styles.avatar}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>JD</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.clientName}>Jane Doe</Text>
                            <Text style={styles.clientEmail}>janedoe@example.abc</Text>
                            <TouchableOpacity>
                                <Text style={styles.addClient}>Add to client list</Text>
                            </TouchableOpacity>
                        </View>

                        <Ionicons name="mail-outline" size={20} color="#2E2416" />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Services (2)</Text>

                    <View style={styles.serviceItem}>
                        <View>
                            <Text style={styles.serviceTitle}>Hair Treatment</Text>
                            <Text style={styles.serviceMeta}>9:00 AM · Any Specialist</Text>
                        </View>
                        <Text style={styles.price}>$40</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View>
                            <Text style={styles.serviceTitle}>Hair Treatment</Text>
                            <Text style={styles.serviceMeta}>9:00 AM · Any Specialist</Text>
                        </View>
                        <Text style={styles.price}>$40</Text>
                    </View>

                    <TouchableOpacity style={styles.addServiceBtn}>
                        <Ionicons name="add" size={16} color="#2E2416" />
                        <Text style={styles.addServiceText}>Add service</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notes</Text>
                    <View style={styles.notesBox}>
                        <Text style={styles.notesText}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalAmount}>$89.00</Text>
                </View>

                <TouchableOpacity style={styles.paymentBtn}>
                    <Text style={styles.paymentText}>Confirm Payment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDDFD4",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        paddingTop: 60,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2E2416",
    },

    section: {
        paddingHorizontal: 16,
        marginTop: 10,
    },

    dateText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2E2416",
        marginBottom: 10,
    },

    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: "#E6E9E1",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        marginBottom: 8,
    },

    statusText: {
        color: "#2F4A33",
        fontWeight: "600",
        marginRight: 4,
    },

    duration: {
        color: "#6F6A5B",
        fontSize: 13,
    },

    card: {
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginTop: 14,
        padding: 14,
        borderRadius: 16,
        elevation: 2,
    },

    clientRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: "#9A8A4B",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    clientName: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2E2416",
    },

    clientEmail: {
        fontSize: 13,
        color: "#7B7462",
        marginBottom: 4,
    },

    addClient: {
        fontSize: 13,
        color: "#9A8A4B",
        fontWeight: "600",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2E2416",
        marginBottom: 10,
    },

    serviceItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 14,
        marginBottom: 10,
    },

    serviceTitle: {
        fontWeight: "600",
        color: "#2E2416",
    },

    serviceMeta: {
        fontSize: 12,
        color: "#7A7362",
        marginTop: 2,
    },

    price: {
        fontWeight: "700",
        color: "#2E2416",
    },

    addServiceBtn: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: "#C8C2A8",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },

    addServiceText: {
        marginLeft: 6,
        color: "#2E2416",
        fontWeight: "600",
    },

    notesBox: {
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 14,
    },

    notesText: {
        color: "#6E6858",
        lineHeight: 18,
    },

    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#DDDFD4",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 0.5,
        borderColor: "#ccc",
    },

    totalLabel: {
        color: "#7A7362",
        fontSize: 12,
    },

    totalAmount: {
        fontSize: 18,
        fontWeight: "800",
        color: "#2E2416",
    },

    paymentBtn: {
        backgroundColor: "#2F4A33",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 14,
    },

    paymentText: {
        color: "#DDDFD4",
        fontWeight: "700",
        fontSize: 15,
    },
});

