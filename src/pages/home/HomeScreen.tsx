import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import { PlaceList } from "@shared/ui/PlaceList";
import { BRAND_COLOR } from "@shared/constants/Colors";
import { Header } from "@widgets/header/Header";
import { RecommendSchedules } from "./ui/RecommendSchedules";
import { useDarkMode } from "@shared/hooks/useDarkMode";

export const HomeScreen = () => {
  const isDarkMode = useDarkMode();
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Travel Agent"
        rightIcon={
          <Ionicons
            name="notifications-outline"
            size={24}
            color={isDarkMode ? "white" : "#333"}
          />
        }
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <RecommendSchedules />

        <View style={styles.sectionHeader}>
          <Text
            style={[
              styles.sectionTitle,
              { color: isDarkMode ? "white" : "#333" },
            ]}>
            장소 목록
          </Text>
          <View style={styles.headerActions}>
            <Pressable
              onPress={() => setIsGridLayout(!isGridLayout)}
              style={styles.layoutButton}>
              <MaterialCommunityIcons
                name={isGridLayout ? "view-grid" : "view-agenda"}
                size={24}
                color={BRAND_COLOR}
              />
            </Pressable>
          </View>
        </View>

        <PlaceList isGridLayout={isGridLayout} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerActions: {
    marginTop: -16,
  },
  layoutButton: {
    padding: 4,
  },
});
