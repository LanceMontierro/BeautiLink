import { Tabs, useRouter, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Canvas, Circle } from "@shopify/react-native-skia";

const TAB_HEIGHT = 70;
const ICON_SIZE = 22;
const BLOB_RADIUS = 28;
const TAB_COUNT = 4;

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    return (
        <>
            <Tabs screenOptions={{ headerShown: false }} />
            <CustomTabBar paddingBottom={insets.bottom} />
        </>
    );
}

function CustomTabBar({ paddingBottom }: { paddingBottom: number }) {
    const router = useRouter();
    const pathname = usePathname();
    const { width } = useWindowDimensions();
    const TAB_WIDTH = width / TAB_COUNT;
    const TAB_X = Array.from({ length: TAB_COUNT }, (_, i) => TAB_WIDTH * (i + 0.5));

    const [blobX, setBlobX] = useState(TAB_X[0]);

    useEffect(() => {
        const index = getActiveIndex(pathname);
        setBlobX(TAB_X[index]);
    }, [pathname, width]);

    const isActive = (path: string) => pathname === path;

    return (
        <View style={[styles.tabBar, { paddingBottom }]}>

            {/* Liquid Blob */}
            <Canvas style={StyleSheet.absoluteFill}>
                <Circle cx={blobX} cy={TAB_HEIGHT / 2} r={BLOB_RADIUS} color="#DDDFD4" />
            </Canvas>

            <TabButton
                icon={<Ionicons name="home" size={ICON_SIZE} />}
                active={isActive("/")}
                onPress={() => router.push("/")}
            />

            <TabButton
                icon={<MaterialCommunityIcons name="augmented-reality" size={ICON_SIZE} />}
                active={isActive("/tryon")}
                onPress={() => router.push("/tryon")}
            />

            <TabButton
                icon={<MaterialCommunityIcons name="book-information-variant" size={ICON_SIZE} />}
                active={isActive("/booking")}
                onPress={() => router.push("/booking")}
            />

            <TabButton
                icon={<Ionicons name="person" size={ICON_SIZE} />}
                active={isActive("/profile")}
                onPress={() => router.push("/profile")}
            />
        </View>
    );
}

function TabButton({
                       icon,
                       active,
                       onPress,
                   }: {
    icon: React.ReactNode;
    active: boolean;
    onPress: () => void;
}) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            {React.cloneElement(icon as any, {
                color: active ? "#2F4A33" : "#999",
            })}
        </Pressable>
    );
}

function getActiveIndex(path: string) {
    if (path === "/") return 0;
    if (path.startsWith("/tryon")) return 1;
    if (path.startsWith("/booking")) return 2;
    if (path.startsWith("/profile")) return 3;
    return 0;
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: TAB_HEIGHT,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F7F0",
        borderTopWidth: 1,
        borderTopColor: "#9A8A4B",
    },
    button: {
        flex: 1,
        height: TAB_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
    },
});