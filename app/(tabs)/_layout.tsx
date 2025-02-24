import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { HapticTab } from "@shared/components/HapticTab";
import TabBarBackground from "@shared/components/ui/TabBarBackground";
import { Colors } from "@shared/constants/Colors";
import { useColorScheme } from "@shared/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          // ios: {
          //   // Use a transparent background on iOS to show the blur effect
          //   position: "absolute",
          // },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "일정",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="schedule" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
