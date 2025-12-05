import StyledButton from "@/app/components/StyledButton";
import StyledModal from "@/app/components/StyledModal";
import StyledText from "@/app/components/StyledText";
import StyledTextInput from "@/app/components/StyledTextInput";
import { COLORS } from "@/app/constants/ui";
import { Todo } from "@/app/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate:(title:string) => void;
  title: Todo['title'] 
}

const EditTodoModal:React.FC<EditTodoModalProps> = ({ 
  isOpen, onClose, onUpdate, title}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title)
  const [inputError, setInputError] = useState(false);

  const onPressSave = () => {
    if (updatedTitle === '') {
      setInputError(true);
      return;
    }
    onUpdate(updatedTitle)
    onClose();
  }

useEffect(() => {
  if(inputError && updatedTitle !== '') {
    setInputError(false);
  }
},[updatedTitle])

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContent}>
        <StyledText variant="heading" >Edit todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput style={styles.input} 
          value={updatedTitle} 
          onChangeText={setUpdatedTitle}
          placeholder="Edit Todo ..." 
          isError={inputError}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Cancel" onPress={onClose} />
          <StyledButton label="Save" onPress={onPressSave} />
        </View>
      </View>
    </StyledModal>
  )
}

const styles = StyleSheet.create({
modalContent: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    padding: 20,
    width: "85%",
    borderRadius: 12,
    alignSelf: "center",
    justifyContent: "center",
    gap: 16,
},
inputContainer: {
  width: "100%",
},
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "white",
    color: "black",
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap:10,
  },
})

export default EditTodoModal