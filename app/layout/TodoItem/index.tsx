import StyledButton from "@/app/components/StyledButton";
import StyledCheckbox from "@/app/components/StyledCheckbox";
import StyledText from "@/app/components/StyledText";
import { COLORS } from "@/app/constants/ui";
import { Todo } from "@/app/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import EditTodoModal from "../Modals/EditTodoModal/EditTodoModal";

type TodoItemProps = {
  id: Todo['id'];
  title: string;
  isCompleted: boolean;
  onCheckTodo: (id: Todo['id']) => void;
  onDeleteTodo: (id: Todo['id']) => void;
  onUpdateTodo: (id: Todo['id'], title: Todo['title']) => void;
};


const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted, onCheckTodo, id, onDeleteTodo, onUpdateTodo, }) => {

const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}> 
      <StyledCheckbox checked={isCompleted} onCheck={() => onCheckTodo(id)} />
      <StyledText
        style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}
      >
        {title}
      </StyledText>
      </View>
      <View style={styles.controlsContainer}>
      <StyledButton icon="pencil" size="small" 
      onPress={() => setIsEditModalOpen(true)}  />
      
      <EditTodoModal 
      title={title} 
      isOpen={isEditModalOpen} 
      onClose={() => setIsEditModalOpen(false)} 
      onUpdate={(newTitle) => onUpdateTodo(id, newTitle)}

        />
      <StyledButton icon="trash" size="small" 
      variant="delete" 
      onPress={() => onDeleteTodo(id)}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  checkTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
});
export default TodoItem;
