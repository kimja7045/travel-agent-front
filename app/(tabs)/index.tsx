import { StyleSheet, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/ui/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Header />
        <ThemedText>Hello</ThemedText>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
