import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemedText } from "../../ThemedText";
import { ThemedView } from "../../ThemedView";
import styled from "styled-components/native";

export type Place = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export const PlaceItem = ({ title, subtitle, image }: Place) => {
  const { width: screenWidth } = useWindowDimensions();
  const PLACE_WIDTH = screenWidth / 2 - 20;

  return (
    <PlaceButton style={styles.container} width={PLACE_WIDTH}>
      <ThemedView style={styles.contentContainer}>
        <PlaceImage
          source={{ uri: image }}
          resizeMode="cover"
          width={PLACE_WIDTH}
        />
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText style={styles.description}>{subtitle}</ThemedText>
      </ThemedView>
    </PlaceButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 8,
    flex: 1,
  },
  title: {
    marginTop: 8,
  },
  description: {
    color: "gray",
    fontSize: 14,
    lineHeight: 21,
  },
});

const PlaceButton = styled.Pressable<{ width: number }>`
  width: ${({ width }) => width}px;
`;

const PlaceImage = styled.Image`
  border-radius: 8px;
  width: ${({ width }) => width}px;
  aspect-ratio: 1;
`;
