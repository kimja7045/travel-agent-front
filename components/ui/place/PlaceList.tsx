import { FlatList, StyleSheet } from "react-native";
import { PlaceItem, Place } from "./PlaceItem";

type PlaceListProps = {
  places: Place[];
  numColumns?: number;
};

export const PlaceList = ({ places, numColumns = 2 }: PlaceListProps) => {
  return (
    <FlatList
      data={places}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <PlaceItem {...item} />}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 4,
  },
});
