import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Alert,
} from "react-native";

export default function AuthScreen() {
    const [showAdmin, setShowAdmin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        console.log("Google Login");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook Login");
    };

    const handleAdminLogin = () => {

        if (username === "admin" && password === "1234") {
            console.log("Admin Logged In");

        } else {
            Alert.alert("Login Failed", "Invalid admin credentials");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.title}>BeautiLink</Text>
                <Text style={styles.subtitle}>Beauty. Relax. Repeat.</Text>
            </View>

            <View style={styles.card}>
                {!showAdmin ? (
                    <>
                        <Text style={styles.cardTitle}>Continue with</Text>

                        <TouchableOpacity
                            style={styles.googleButton}
                            activeOpacity={0.85}
                            onPress={handleGoogleLogin}
                        >
                            <Text style={styles.buttonText}>Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.facebookButton}
                            activeOpacity={0.85}
                            onPress={handleFacebookLogin}
                        >
                            <Text style={styles.buttonText}>Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setShowAdmin(true)}
                            style={styles.adminLink}
                        >
                            <Text style={styles.adminText}>Admin Login</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.cardTitle}>Admin Access</Text>

                        <TextInput
                            placeholder="Username or Email"
                            placeholderTextColor="#9A8A4B"
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#9A8A4B"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={styles.adminButton}
                            onPress={handleAdminLogin}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setShowAdmin(false)}
                            style={styles.adminLink}
                        >
                            <Text style={styles.adminText}>
                                Back to User Login
                            </Text>
                        </TouchableOpacity>
                    </>
                )}

                <Text style={styles.footerText}>
                    By continuing, you agree to our{" "}
                    <Text style={styles.link}>Terms & Privacy Policy</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDDFD4",
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    header: {
        alignItems: "center",
        marginBottom: 50,
    },

    title: {
        fontSize: 34,
        fontWeight: "600",
        color: "#2E2416",
        letterSpacing: 1,
    },

    subtitle: {
        fontSize: 14,
        color: "#2F4A33",
        marginTop: 8,
    },

    card: {
        backgroundColor: "#DDDFD4",
        borderRadius: 28,
        padding: 28,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 12 },
        elevation: 8,
    },

    cardTitle: {
        fontSize: 18,
        color: "#2E2416",
        marginBottom: 24,
        textAlign: "center",
    },

    googleButton: {
        backgroundColor: "#2F4A33",
        paddingVertical: 16,
        borderRadius: 18,
        alignItems: "center",
        marginBottom: 14,
    },

    facebookButton: {
        backgroundColor: "#9A8A4B",
        paddingVertical: 16,
        borderRadius: 18,
        alignItems: "center",
    },

    buttonText: {
        color: "#DDDFD4",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: "#DDDFD4",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#9A8A4B",
        marginBottom: 14,
        color: "#2E2416",
    },

    adminButton: {
        backgroundColor: "#2F4A33",
        paddingVertical: 16,
        borderRadius: 18,
        alignItems: "center",
        marginTop: 6,
    },

    adminLink: {
        marginTop: 18,
        alignItems: "center",
    },

    adminText: {
        fontSize: 13,
        color: "#2F4A33",
        fontWeight: "500",
    },
    footerText: {
        fontSize: 12,
        color: "#2E2416",
        textAlign: "center",
        marginTop: 20,
        opacity: 0.8,
    },

    link: {
        color: "#2F4A33",
        fontWeight: "500",
    },
});