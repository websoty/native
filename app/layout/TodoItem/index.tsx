import StyledButton from "@/app/components/StyledButton";
import StyledCheckbox from "@/app/components/StyledCheckbox";
import StyledText from "@/app/components/StyledText";
import { COLORS } from "@/app/constants/ui";
import { StyleSheet, View } from "react-native";

type TodoItemProps = {
  title: string;
  isCompleted: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}> 
      <StyledCheckbox checked={isCompleted} onCheck={() => {}} />
      <StyledText
        style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}
      >
        {title}
      </StyledText>
      </View>
      <View style={styles.controlsContainer}>
      <StyledButton icon="pencil" size="small" />
      <StyledButton icon="trash" size="small" variant="delete"/>
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
