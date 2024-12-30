import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
