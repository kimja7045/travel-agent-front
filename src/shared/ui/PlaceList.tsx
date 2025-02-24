import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";

import { useCallback } from "react";
import { PLACE_LIST } from "@shared/constants/place";

export const PlaceList = ({ isGridLayout }: { isGridLayout: boolean }) => {
  const renderPlaceCard = useCallback(
    ({ item }: { item: (typeof PLACE_LIST)[0] }) => (
      <Pressable
        style={[styles.placeCard, isGridLayout && styles.placeCardGrid]}>
        <Image
          source={{ uri: item.image }}
          style={isGridLayout ? styles.gridPlaceImage : styles.placeImage}
        />
        <View style={styles.placeInfo}>
          <Text style={styles.placeName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.description}</Text>
          </View>
        </View>
      </Pressable>
    ),
    [isGridLayout],
  );

  return (
    <>
      {isGridLayout ? (
        <FlatList
          data={PLACE_LIST}
          renderItem={renderPlaceCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.gridRow}
          scrollEnabled={false}
        />
      ) : (
        <ScrollView style={styles.placesContainer}>
          {PLACE_LIST.map((place) => (
            <View style={styles.defaultPlaceContainer} key={place.id}>
              {renderPlaceCard({ item: place })}
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  placesContainer: {
    marginBottom: 30,
  },
  gridRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  placeCard: {
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  placeCardGrid: {
    width: "48%",
  },
  gridPlaceImage: {
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  placeImage: {
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  placeInfo: {
    padding: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
    color: "#666",
  },
  defaultPlaceContainer: {
    marginBottom: 12,
  },
});
