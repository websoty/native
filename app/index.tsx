import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./constants/ui";
import useTodo from "./hooks/useTodo";
import Header from "./layout/Header/index";
import TodoList from "./layout/Header/TodoList";
import TodoCreator from "./layout/TodoCreator/TodoCreator";
import { Todo } from "./types/todo";

const defaultTodos: Todo[] = [
  { id: 1, title: "buy me1", isCompleted: false },
  { id: 2, title: "buy me2", isCompleted: false },
  { id: 3, title: "buy me3", isCompleted: false },
];

export default function Index() {
  const { todos, addTodo, onCheckTodo, onDeleteTodo, onUpdateTodo } = useTodo();
  
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator addTodo={addTodo} />
      <View style={{ flex: 1 }}>
        <TodoList todos={todos} 
        onCheckTodo={onCheckTodo} 
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
