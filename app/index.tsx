import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./constants/ui";
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
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodo = (title: Todo["title"]) => {
    setTodos(prev => [...prev, { id: Date.now(), title, isCompleted: false }]);
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted} : todo));
  }

  const onUpdateTodo = (id: Todo['id'], title: Todo['title']) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, title} : todo)));
  }

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
