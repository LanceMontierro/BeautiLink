import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SERVICES = [
    { id: 1, label: "Haircuts", icon: <Ionicons name="cut" size={18} /> },
    { id: 2, label: "Nail Care", icon: <MaterialCommunityIcons name="nail" size={18} /> },
    { id: 3, label: "Make Up", icon: <Ionicons name="brush" size={18} /> },
    { id: 4, label: "Facial", icon: <MaterialCommunityIcons name="face-woman" size={18} /> },
    { id: 5, label: "Hair Color", icon: <MaterialCommunityIcons name="palette" size={18} /> },
    { id: 6, label: "Massage", icon: <MaterialCommunityIcons name="spa" size={18} /> },
];

export default function Services() {
    return (
        <View style={{ paddingHorizontal: 16, marginBottom: 10}}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Services</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 4, paddingRight: 16 }}
            >
                {SERVICES.map((service, index) => {
                    const isActive = index === 0;

                    return (
                        <TouchableOpacity
                            key={service.id}
                            style={[
                                styles.serviceChip,
                                isActive && styles.activeService
                            ]}
                        >
                            {React.cloneElement(service.icon, {
                                color: isActive ? "#fff" : "#0F3D3E"
                            })}
                            <Text
                                style={[
                                    styles.serviceText,
                                    { color: isActive ? "#fff" : "#0F3D3E" }
                                ]}
                            >
                                {service.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111",
    },

    seeAll: {
        fontSize: 14,
        color: "#615447",
        fontWeight: "600",
    },

    serviceChip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F7F0",
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginRight: 10,
    },

    activeService: {
        backgroundColor: "#0F3D3E",
    },

    serviceText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: "600",
    },
});
