import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveValue = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Error saving value", e);
  }
};

export const loadValue = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log("Error loading", e);
    return null;
  }
}

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("Error removing:", e);
  }
};