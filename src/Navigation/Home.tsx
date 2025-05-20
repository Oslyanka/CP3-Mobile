import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../types/navigation";
import History from "../Components/History";
import Fiction from "../Components/Fiction";

const Tabs = createBottomTabNavigator<Home>();

const HomeTab = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="History" component={History} />
      <Tabs.Screen name="Fiction" component={Fiction} />
    </Tabs.Navigator>
  );
};

export default HomeTab;
