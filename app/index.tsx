import { StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS } from "./constants/ui";
import Header from "./layout/Header/index";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <Text style={{ fontSize: 22 }}>Главная страница!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
