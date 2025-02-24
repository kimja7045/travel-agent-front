import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import { PlaceList } from "@shared/ui/PlaceList";
import { RECOMMEND_SCHEDULE_LIST } from "@shared/constants/place";
import { BRAND_COLOR } from "@shared/constants/Colors";

export const HomeScreen = () => {
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Travel Agent</Text>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>일정 추천</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recommendationsContainer}>
          {RECOMMEND_SCHEDULE_LIST.map((rec) => (
            <Pressable key={rec.id} style={styles.recommendationCard}>
              <Text style={styles.recommendationText}>
                {rec.nights}박 {rec.days}일
                {/* {rec.days} Days {rec.nights} Nights */}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>장소 목록</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  country: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: BRAND_COLOR,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  recommendationsContainer: {
    marginBottom: 30,
  },
  recommendationCard: {
    backgroundColor: BRAND_COLOR + "20",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },
  recommendationText: {
    color: BRAND_COLOR,
    fontWeight: "600",
    fontSize: 14,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
});
