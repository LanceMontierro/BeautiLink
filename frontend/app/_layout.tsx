
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {BookingProvider} from "../contexts/BookingContext";

export default function RootLayout() {


  return (
      <BookingProvider>
        <Stack initialRouteName={"(screens)"}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </BookingProvider>
  );
}
