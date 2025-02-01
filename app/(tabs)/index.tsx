import { StyleSheet, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/ui/Header";
import { ThemedView } from "../../components/ThemedView";
import { Card } from "../../components/ui/Card";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Header />
        <Card
          title="Card Title"
          subtitle="Card Subtitle"
          url="https://picsum.photos/700"
        />
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="subtitle">trip</ThemedText>
          <ThemedText>Hello</ThemedText>
        </ThemedView>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});
