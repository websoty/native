import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS } from "../constants/ui";

type StyledTextInput = TextInputProps & {
  isError?: boolean;
};

const StyledTextInput: React.FC<StyledTextInput> = ({ isError, ...props }) => {
  return (
    <TextInput
      style={[styles.input, props.style, isError ? styles.error : null]}
      {...props}
      placeholderTextColor={COLORS.PRIMARY_BORDER}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.PRIMARY_BORDER,
    flex: 1,
  },
  error: {
    borderColor: COLORS.PRIMARY_RED,
  },
});

export default StyledTextInput;
