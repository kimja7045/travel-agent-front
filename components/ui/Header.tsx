import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";
import styled from "styled-components";
import { BRAND_COLOR } from "../../constants/Colors";

export const Header = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">TripGuide</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export const HeaderTitle = styled(ThemedText)`
  font-size: 48px;
  line-height: 60px;
  font-weight: bold;
  color: ${BRAND_COLOR};
`;
