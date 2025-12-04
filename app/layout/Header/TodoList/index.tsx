import { Todo } from "@/app/types/todo";
import { FlatList, View } from "react-native";
import TodoItem from "../../TodoItem";

type TodoListProps = {
  todos: Todo[];
  onCheckTodo: (id: Todo["id"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
  onUpdateTodo: (id: Todo["id"], title: Todo["title"]) => void;
};


const TodoList: React.FC<TodoListProps> = ({ 
  todos, onCheckTodo, onDeleteTodo, onUpdateTodo }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem 
          id={item.id}
          title={item.title} 
          isCompleted={item.isCompleted}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
           />
        )}
      />
    </View>
  );
};

export default TodoList;
