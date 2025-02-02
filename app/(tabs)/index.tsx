import { StyleSheet, SafeAreaView } from "react-native";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/ui/Header";
import { Place } from "../../components/ui/place/PlaceItem";
import { PlaceList } from "../../components/ui/place/PlaceList";

const MOCK_PLACES: Place[] = [
  {
    id: "1",
    title: "와이탄(外滩)",
    subtitle: "Trip Subtitle",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAyNDAyMDlfMjY2/MDAxNzA3NDQ3OTA2OTk2.Hg4SgYE0Cp1fAQmkOUnCwEqrs-_YJC2NbZW3weg_EWgg.wLQtj9cN7To_d__nn73NBI1pCtsiJfb60deeogC97Kog.JPEG.solid453/KakaoTalk_20240111_093152752_05.jpg?type=w800",
  },
  {
    id: "2",
    title: "동방명주(东方明珠塔)",
    subtitle:
      "낮과 밤 모두 아름다운 풍경을 즐길 수 있는 상하이 대표 랜드마크 타워",
    image:
      "https://d2mgzmtdeipcjp.cloudfront.net/files/good/2024/04/16/17132264368030.jpg",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Header />
        <PlaceList places={MOCK_PLACES} />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 8,
  },
});
