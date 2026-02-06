import {Dimensions, FlatList, ScrollView, StyleSheet, View} from "react-native";
import { useEffect } from "react";
import Services from "../../components/Services";
import Offers from "../../components/Offers";
import User from "../../components/user";
import Notification from "../../components/Notification";
import Appointments from "../../components/UpcommingAppointments";

export default function HomeScreen() {

    const sections = [
        { id: "notification", component: <Notification /> },
        { id: "user", component: <User /> },
        { id: "offers", component: <Offers /> },
        { id: "services", component: <Services /> },
        { id: "appointments", component: <Appointments /> },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={sections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => item.component}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: "#DDDFD4",
    },
})
