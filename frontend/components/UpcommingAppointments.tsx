import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Switch,
} from "react-native";

const initialAppointments = [
    {
        id: "1",
        date: "Aug 12, 2025",
        time: "10:00 AM",
        stylist: "John Doe",
        service: "Regular Shaving",
        remind: false,
    },
];

export default function UpcomingAppointments() {
    const [appointments, setAppointments] = useState(initialAppointments);

    const addAppointment = (newAppointment) => {
        setAppointments((prev) => [newAppointment, ...prev]);
    };

    const renderAppointment = ({ item }) => (
        <View style={styles.card}>

            <View style={styles.topRow}>
                <Text style={styles.dateText}>
                    {item.date} • {item.time}
                </Text>

                <View style={styles.remindRow}>
                    <Text style={styles.remindText}>Remind me</Text>
                    <Switch value={item.remind} />
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.contentRow}>

                <View style={styles.info}>

                    <Text style={styles.meta}>
                        <Text style={styles.bold}>Stylist:</Text> {item.stylist}
                    </Text>

                    <Text style={styles.meta}>
                        <Text style={styles.bold}>Services:</Text> {item.service}
                    </Text>
                </View>
            </View>

            <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>Cancel Booking</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rescheduleBtn}>
                    <Text style={styles.rescheduleText}>Reschedule</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Upcoming Appointments</Text>
            </View>

            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={renderAppointment}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingTop: 10,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#222",
    },

    seeAll: {
        color: "#615447",
        fontWeight: "600",
    },

    card: {
        backgroundColor: "#F7F7F0",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    dateText: {
        fontSize: 14,
        color: "#555",
    },

    remindRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    remindText: {
        marginRight: 6,
        color: "#777",
    },

    divider: {
        height: 1,
        backgroundColor: "#E2E2E2",
        marginVertical: 12,
    },

    contentRow: {
        flexDirection: "row",
    },

    image: {
        width: 80,
        height: 90,
        borderRadius: 12,
        marginRight: 12,
    },

    info: {
        flex: 1,
    },

    salon: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 4,
        color: "#222",
    },

    address: {
        color: "#666",
        marginBottom: 6,
    },

    meta: {
        color: "#444",
        marginBottom: 2,
    },

    bold: {
        fontWeight: "700",
    },

    buttonsRow: {
        flexDirection: "row",
        marginTop: 14,
    },

    cancelBtn: {
        flex: 1,
        borderWidth: 1.5,
        borderColor: "#2E2416",
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
        marginRight: 10,
    },

    cancelText: {
        color: "#2E2416",
        fontWeight: "700",
    },

    rescheduleBtn: {
        flex: 1,
        backgroundColor: "#0F3D3E",
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },

    rescheduleText: {
        color: "#fff",
        fontWeight: "700",
    },
});