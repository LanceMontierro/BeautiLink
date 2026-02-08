import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import dashboard from "../(AdminScreen)/dashboard";
import notifications from "../(AdminScreen)/notifications";
import clientList from "../(AdminScreen)/clientList";
import detailsscreen from "../(AdminScreen)/detailsscreen";
import {COLORS} from "../../constants/theme";

const Drawer = createDrawerNavigator();

export default function _Layout() {
    return (
            <Drawer.Navigator
                id="main-drawer"
                screenOptions={{
                    headerShown: false,
                    headerStyle: { backgroundColor: COLORS.background },
                    headerTintColor: COLORS.dark,
                    drawerStyle: { backgroundColor: COLORS.background, width: 280 },
                    drawerActiveBackgroundColor: COLORS.primary,
                    drawerActiveTintColor: "#fff",
                    drawerInactiveTintColor: COLORS.dark,
                }}
            >
                <Drawer.Screen name="Dashboard" component={dashboard} />
                <Drawer.Screen name="Clients" component={clientList} />
                <Drawer.Screen name="detailsscreen" component={detailsscreen} />
                <Drawer.Screen name="Notifications" component={notifications} />
            </Drawer.Navigator>
    );
}