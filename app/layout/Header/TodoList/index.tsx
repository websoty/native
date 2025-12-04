import { Todo } from "@/app/types/todo";
import { FlatList, View } from "react-native";
import TodoItem from "../../TodoItem";

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem title={item.title} isCompleted={item.isCompleted} />
        )}
      />
    </View>
  );
};

export default TodoList;
