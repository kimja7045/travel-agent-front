import { ReactNode } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BRAND_COLOR } from "../../shared/constants/Colors";

export const Header = ({
  title,
  titleColor = BRAND_COLOR,
  rightIcon,
}: {
  title: string;
  rightIcon?: ReactNode;
  titleColor?: string;
}) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: BRAND_COLOR,
  },
});
