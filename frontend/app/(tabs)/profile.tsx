import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { useGlobalContext } from "./../../context/apiContext";

export default function UserProfileScreen() {
  const { handleSignOut, user } = useGlobalContext();

  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.header}>
          <Image
              source={{
                uri:
                    user?.imageUrl ||
                    "https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80",
              }}
              style={styles.avatar}
          />
          <Text style={styles.userName}>{user?.firstName || null}</Text>
          <Text style={styles.membership}>Member</Text>
        </View>

        <View style={styles.menuCard}>
          <ProfileRow title="My Appointments" />
          <ProfileRow title="Favorite Stylists" />
          <ProfileRow title="Payment Methods" />
          <ProfileRow title="Settings" />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

function ProfileRow({ title }) {
  return (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowText}>{title}</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#DDDFD4",
  },

  header: {
    alignItems: "center",
    paddingVertical: 40,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: "#9A8A4B",
  },

  userName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2E2416",
    marginTop: 12,
  },

  membership: {
    fontSize: 14,
    color: "#9A8A4B",
    marginTop: 4,
  },

  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DDDFD4",
    marginHorizontal: 20,
    borderRadius: 22,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },

  statItem: {
    alignItems: "center",
  },

  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F4A33",
  },

  statLabel: {
    fontSize: 13,
    color: "#2E2416",
    marginTop: 4,
  },

  statDivider: {
    width: 1,
    backgroundColor: "#9A8A4B",
    opacity: 0.3,
  },

  menuCard: {
    backgroundColor: "#F7F7F0",
    margin: 20,
    borderRadius: 24,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  rowText: {
    fontSize: 15,
    color: "#2E2416",
  },

  rowArrow: {
    fontSize: 22,
    color: "#9A8A4B",
  },

  logoutButton: {
    marginHorizontal: 40,
    marginBottom: 40,
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#2F4A33",
    alignItems: "center",
  },

  logoutText: {
    fontSize: 15,
    color: "#2F4A33",
    fontWeight: "500",
  },
});
