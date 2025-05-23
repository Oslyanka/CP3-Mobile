import { NavigationContainer, BaseRouter } from "@react-navigation/native";
import HomeTab from "@/Navigation/Home";

export default function App() {
  const nome = "Leonardo";
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}
