import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/types/navigation";
import History from "@/Screens/History";
import Fiction from "@/Screens/Fiction";
//import PostDetail from "@/Screens/PostDetail";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBook, faRobot } from "@fortawesome/free-solid-svg-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tabs = createBottomTabNavigator<Home>();

//abas de vizualização, história e ficção
const HomeTab = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBook} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Fiction"
        component={Fiction}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faRobot} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTab;
