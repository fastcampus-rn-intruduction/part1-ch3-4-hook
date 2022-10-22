// 시작 전 App.js 코드
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFuctionalComponent /> */}
      <UseEffectWithClassComponent />
      {/* <UseEffectWithFunctionalComponent /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
