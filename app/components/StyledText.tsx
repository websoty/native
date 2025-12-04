import { StyleSheet, Text, TextProps } from "react-native";
import { COLORS } from "../constants/ui";

type StylexTextProps = TextProps;

const StyledText: React.FC<StylexTextProps> = ({ style, ...props }) => {
  return <Text style={[styles.base, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
});

export default StyledText;
