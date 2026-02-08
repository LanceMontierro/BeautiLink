import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { BookingProvider } from "../contexts/BookingContext";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import ContextProvider from "../context/apiContext";
export default function RootLayout() {
    const publicClerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

    if (!publicClerkKey) {
        throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY");
    }

    return (
        <ClerkProvider publishableKey={publicClerkKey} tokenCache={tokenCache}>
            <ContextProvider>
                <BookingProvider>
                    <Stack initialRouteName={"(screens)"}>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
                    </Stack>
                    <StatusBar style="auto" />
                </BookingProvider>
            </ContextProvider>
        </ClerkProvider>
    );
}
