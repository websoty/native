import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS } from "../constants/ui";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "small" | "large";
  variant?: "primary" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  disabled,
  ...props
}) => {

  const textVariant = () => size === 'large' ? 'heading' : 'small';

  return (
    <TouchableOpacity
      style={[styles.base, 
        disabled ? styles.disabled : null,
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        variant === 'delete' ? styles.delete : null
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText variant={textVariant()}>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  //Sizes
  small: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 30,
  },
  //Variants
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  disabled: {
    opacity: 0.5
  }
});

export default StyledButton;
