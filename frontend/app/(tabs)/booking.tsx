import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useBooking } from "../../contexts/BookingContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


const SERVICES = ["Haircut", "Hair Coloring", "Manicure", "Pedicure", "Facial"];
const TIMES = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

export default function BookingScreen() {
    const tabBarHeight = useBottomTabBarHeight();
    const { addBooking } = useBooking();

    const [customer, setCustomer] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [timeIndex, setTimeIndex] = useState(0);

    const handleSubmit = () => {
        if (!customer || !service || !date) return;

        addBooking({
            customer,
            service,
            date,
            time: TIMES[timeIndex],
        });

        setCustomer("");
        setService("");
        setDate("");
        setTimeIndex(0);
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.container,
                { paddingBottom: tabBarHeight + 20 },
            ]}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Book Your Appointment</Text>
            <Text style={styles.subtitle}>Relax. Refresh. Renew.</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#2F4A33"
                    value={customer}
                    onChangeText={setCustomer}
                />

                <Text style={styles.label}>Select Service</Text>
                <View style={styles.serviceContainer}>
                    {SERVICES.map((item) => (
                        <TouchableOpacity
                            key={item}
                            style={[styles.chip, service === item && styles.chipActive]}
                            onPress={() => setService(item)}
                        >
                            <Text style={[styles.chipText, service === item && styles.chipTextActive]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.label}>Select Date</Text>
                <Calendar
                    onDayPress={(day) => setDate(day.dateString)}
                    markedDates={{
                        [date]: {
                            selected: true,
                            selectedColor: "#9A8A4B",
                        },
                    }}
                    theme={{
                        calendarBackground: "#FFFFFF",
                        todayTextColor: "#2F4A33",
                        dayTextColor: "#2E2416",
                        monthTextColor: "#2E2416",
                        arrowColor: "#9A8A4B",
                        textDisabledColor: "#DDDFD4",
                    }}
                    minDate={new Date().toISOString().split("T")[0]}
                    style={styles.calendar}
                />

                <Text style={styles.label}>Select Time</Text>
                <SegmentedControl
                    values={TIMES}
                    selectedIndex={timeIndex}
                    onChange={(e) => setTimeIndex(e.nativeEvent.selectedSegmentIndex)}
                    backgroundColor="#DDDFD4"
                    tintColor="#dbbe54"
                    fontStyle={{ color: "#2E2416" }}
                    activeFontStyle={{ color: "#FFFFFF", fontWeight: "600" }}
                    style={styles.segment}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#DDDFD4",
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginTop: 25 ,
        fontWeight: "700",
        color: "#2E2416",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: "#2F4A33",
        textAlign: "center",
        marginBottom: 24,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        padding: 20,
        elevation: 6,
    },
    label: {
        fontSize: 13,
        color: "#2F4A33",
        marginBottom: 8,
        marginTop: 16,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#DDDFD4",
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 14,
        color: "#2E2416",
    },
    serviceContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    chip: {
        paddingVertical: 9,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: "#DDDFD4",
        borderWidth: 1,
        borderColor: "#9A8A4B",
    },
    chipActive: {
        backgroundColor: "#9A8A4B",
    },
    chipText: {
        fontSize: 13,
        color: "#2E2416",
    },
    chipTextActive: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
    calendar: {
        borderRadius: 16,
        marginTop: 8,
    },
    segment: {
        marginTop: 10,
        height: 42,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#2F4A33",
        paddingVertical: 18,
        borderRadius: 16,
        marginTop: 28,
    },
    buttonText: {
        color: "#DDDFD4",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
    },
});