import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./constants/ui";
import Header from "./layout/Header/index";
import TodoList from "./layout/Header/TodoList";
import { Todo } from "./types/todo";

const defaultTodos: Todo[] = [
  { id: 1, title: "buy me1", isCompleted: false },
  { id: 2, title: "buy me2", isCompleted: false },
  { id: 3, title: "buy me3", isCompleted: false },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
