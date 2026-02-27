import { Text } from "react-native";
import Header from "../components/Header";
import ScreenView from "../components/ScreenView";

export default function Home() {
  return (
    <ScreenView>
      <Header />
      <Text>Home</Text>
    </ScreenView>
  );
}