import { RECOMMEND_SCHEDULE_LIST } from "@shared/constants/place";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import { BRAND_COLOR } from "../../../shared/constants/Colors";
import { useDarkMode } from "@shared/hooks/useDarkMode";

export const RecommendSchedules = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: isDarkMode ? "white" : "#333" }]}>
        일정 추천
      </Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  recommendationsContainer: {
    marginBottom: 30,
  },
  recommendationCard: {
    backgroundColor: BRAND_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },
  recommendationText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
