import StyledButton from "@/app/components/StyledButton";
import StyledTextInput from "@/app/components/StyledTextInput";
import { Todo } from "@/app/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  addTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    console.log("TEXT:", text.length);

    addTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError && text !== "") {
      setInputError(false);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <StyledButton label="+" onPress={onPressAdd} disabled={inputError} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
export default TodoCreator;
