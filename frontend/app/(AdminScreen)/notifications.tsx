import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {COLORS} from "../../constants/theme";

import {useNavigation} from '@react-navigation/native';

export default function Notifications() {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center",paddingHorizontal: 20, marginTop: 40, marginBottom: 20}}>
            <TouchableOpacity onPress={handlePress}>
                <Text>Go BACK</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Notifications</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>New booking from Jane Doe 💇‍♀️</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: COLORS.dark,
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        elevation: 3,
    },
    text: {
        color: COLORS.primary,
        fontWeight: "600",
    },
});