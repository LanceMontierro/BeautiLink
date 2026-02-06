import React, { useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const OFFERS = [
    {
        id: "1",
        title: "   Nail PROMO",
        discount: 20,
        image:
            "https://lirp.cdn-website.com/62a4c034/dms3rep/multi/opt/266041337_131977585925898_790105230352298630_n-1920w.jpg",
    },
    {
        id: "2",
        title: "Beauty Treatment Deal",
        discount: 35,
        image:
            "https://hips.hearstapps.com/hmg-prod/images/flower-manicure-6866809e5412f.jpg?crop=0.879xw:0.703xh;0,0.0980xh&resize=1120:*",
    },
    {
        id: "3",
        title: "Hair Spa Discount",
        discount: 15,

    },
    {
        id: "4",
        title: "Makeup Session Offer",
        discount: 25,
        image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    },
];

export default function Offers() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems?.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const renderOfferCard = ({ item }) => (
        <View style={styles.offerCard}>
            <View style={styles.offerLeft}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>Limited Deals Today</Text>
                </View>

                <Text style={styles.offerTitle}>{item.title}</Text>

                <View style={styles.discountRow}>
                    <Text style={styles.upTo}>Up to</Text>
                    <Text style={styles.discount}>{item.discount}</Text>
                    <Ionicons name="pricetag" size={18} color="#F4A100" style={{ marginLeft: 4 }} />
                </View>
            </View>

            <Image source={{ uri: item.image }} style={styles.offerImage} />
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Special Offers</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                ref={flatListRef}
                data={OFFERS}
                keyExtractor={(item) => item.id}
                renderItem={renderOfferCard}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                decelerationRate="fast"
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                contentContainerStyle={{ paddingRight: 16 }}
            />

            <View style={styles.dots}>
                {OFFERS.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDDFD4",
        paddingHorizontal: 16,
        paddingTop: 20,
        marginTop:100,
    },

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

    offerCard: {
        width: width - 32,
        flexDirection: "row",
        backgroundColor: "#F7F7F0",
        borderRadius: 18,
        padding: 16,
        alignItems: "center",
        marginRight: 12,
    },

    offerLeft: {
        flex: 1,
    },

    badge: {
        backgroundColor: "#F1F1F1",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginBottom: 10,
    },

    badgeText: {
        fontSize: 12,
        color: "#666",
        fontWeight: "600",
    },

    offerTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 6,
        color: "#222",
    },

    discountRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 12,
    },

    upTo: {
        fontSize: 13,
        color: "#777",
        marginRight: 6,
    },

    discount: {
        fontSize: 36,
        fontWeight: "800",
        color: "#111",
    },

    claimBtn: {
        backgroundColor: "#0F3D3E",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: "flex-start",
    },

    claimText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 14,
    },

    offerImage: {
        width: 120,
        height: 120,
        borderRadius: 20,
        marginLeft: 12,
    },

    dots: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 14,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#D8D8D8",
        marginHorizontal: 4,
    },

    activeDot: {
        backgroundColor: "#d6be6d",
        width: 10,
        height: 10,
    },

    servicesRow: {
        flexDirection: "row",
        marginTop: 8,
    },

    serviceChip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginRight: 10,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    activeService: {
        backgroundColor: "#0F3D3E",
    },

    serviceText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: "600",
        color: "#0F3D3E",
    },
});