import { NavigationContainer, BaseRouter } from "@react-navigation/native";
import NavigatorStack from "@/Navigation/Navigator";

export default function App() {
  const nome = "Ian e Aksel";
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
}
