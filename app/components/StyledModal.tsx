import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../constants/ui";

type StyledModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const StyledModal: React.FC<StyledModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.contentContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
});

export default StyledModal;
