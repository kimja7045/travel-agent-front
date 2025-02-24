import { RECOMMEND_SCHEDULE_LIST } from "@shared/constants/place";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import { BRAND_COLOR } from "../../../shared/constants/Colors";

export const RecommendSchedules = () => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  recommendationsContainer: {
    marginBottom: 30,
  },
  recommendationCard: {
    backgroundColor: BRAND_COLOR,
    // backgroundColor: BRAND_COLOR + "20",
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
});
