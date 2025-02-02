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

  return (
    <PlaceButton style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <PlaceImage
          source={{ uri: image }}
          resizeMode="cover"
          width={screenWidth / 2 - 20}
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

const PlaceButton = styled.Pressable``;

const PlaceImage = styled.Image`
  border-radius: 8px;
  width: ${({ width }) => width}px;
  aspect-ratio: 1;
`;
