import {Dimensions, FlatList, ScrollView, StyleSheet, View} from "react-native";
import { useEffect } from "react";
import Services from "../../components/Services";
import Offers from "../../components/Offers";
import Header from "../../components/Header"
import Appointments from "../../components/UpcommingAppointments";

export default function HomeScreen() {

    const sections = [
        { id: "header", component: <Header /> },
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
        backgroundColor: "#DDDFD4",
    },
})
