import { StyleSheet, SafeAreaView, Linking } from "react-native";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/ui/Header";
import { Place } from "../../components/ui/place/PlaceItem";
import { PlaceList } from "../../components/ui/place/PlaceList";
import { useCallback } from "react";
import { isWeb } from "../../utils/platform";
import { setClipboardText } from "../../utils/clipboard";

const MOCK_PLACES: Place[] = [
  {
    id: "1",
    title: "와이탄(外滩)",
    subtitle: "금빛의 화려한 유럽식 건축물.\n왕관 컷 찍으러 가즈아",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAyNDAyMDlfMjY2/MDAxNzA3NDQ3OTA2OTk2.Hg4SgYE0Cp1fAQmkOUnCwEqrs-_YJC2NbZW3weg_EWgg.wLQtj9cN7To_d__nn73NBI1pCtsiJfb60deeogC97Kog.JPEG.solid453/KakaoTalk_20240111_093152752_05.jpg?type=w800",
    countryPlaceName: "外滩",
  },
  {
    id: "2",
    title: "동방명주(东方明珠塔)",
    subtitle: "낮,밤 모두 아름다운 상하이 대표\n랜드마크 타워",
    image:
      "https://d2mgzmtdeipcjp.cloudfront.net/files/good/2024/04/16/17132264368030.jpg",
    countryPlaceName: "东方明珠塔",
  },
  {
    id: "3",
    title: "예원(豫园)",
    subtitle: "상해 필수 코스. 야경 맛집",
    image:
      "https://blog.kakaocdn.net/dn/ZxhXh/btsHOlAyDHF/jbNkl3CetNUCVq9cvm7NW1/img.png",
    countryPlaceName: "豫园",
  },
  {
    id: "4",
    title: "디즈니(迪士尼)",
    subtitle: "주토피아, 캐리비안의 해적,\n어벤져스 Let's go",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPAIK4sZkP9W4HBTSc9BtpteQKmwwpWRaaspZCv=w1080-h624-n-k-no",
    countryPlaceName: "迪士尼",
  },
];

export default function HomeScreen() {
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await requestTrackingPermissionsAsync();
  //     if (status === "granted") {
  //       console.log("Yay! I have user permission to track data");
  //     }
  //   })();
  // }, []);

  const handlePlacePress = useCallback((place: Place) => {
    setClipboardText(place.countryPlaceName);
    const url = `https://ditu.amap.com/search?query=${place.countryPlaceName}`;

    if (isWeb) {
      window.open(url, "_blank");
    } else {
      Linking.openURL(url);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Header />
        <PlaceList places={MOCK_PLACES} onPress={handlePlacePress} />
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
