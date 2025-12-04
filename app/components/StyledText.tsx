import { StyleSheet, Text, TextProps } from "react-native";
import { COLORS } from "../constants/ui";

type StylexTextProps = TextProps & {
  variant?: "primary" | "title" | "subTitle" | "heading" | "small";
};

const StyledText: React.FC<StylexTextProps> = ({
  variant = "primary",
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === "title" ? styles.title : null,
        variant === "subTitle" ? styles.subTitle : null,
        variant === "heading" ? styles.heading : null,
        variant === "small" ? styles.small : null,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 36,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "300",
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default StyledText;
