import { Text } from "react-native";
import Header from "../components/Header";
import ScreenView from "../components/ScreenView";

export default function Dashboard() {
  return (
    <ScreenView>
      <Header />
      <Text>Dashboard</Text>
    </ScreenView>
  );
}