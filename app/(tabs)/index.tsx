import { StyleSheet, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/ui/Header";
import ParallaxScrollView from "../../components/ParallaxScrollView";
import { IconSymbol } from "../../components/ui/IconSymbol";
import { ThemedView } from "../../components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="airplane.circle.fill"
          // style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title" lightColor="#87ceeb" darkColor="#87ceeb">
          Trip
        </ThemedText>
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    // <SafeAreaView style={styles.container}>
    //   <Container>
    //     {/* <Header /> */}
    //     <ThemedText>Hello</ThemedText>
    //   </Container>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {},
});
