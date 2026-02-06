
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {BookingProvider} from "../contexts/BookingContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {


  return (
      <BookingProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </BookingProvider>
  );
}
