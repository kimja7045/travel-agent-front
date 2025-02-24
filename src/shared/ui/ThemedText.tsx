import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@shared/hooks/useThemeColor";
import { BRAND_COLOR } from "@shared/constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor = "black",
  darkColor = "white",
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    lineHeight: 48,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    color: BRAND_COLOR,
  },
});
