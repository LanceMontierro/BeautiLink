
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {BookingProvider} from "../contexts/BookingContext";

export default function RootLayout() {


  return (
        <Stack initialRouteName={"(AdminScreen)"}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
            <Stack.Screen name="(AdminScreen)" options={{ headerShown: false }} />
        </Stack>
  );
}
