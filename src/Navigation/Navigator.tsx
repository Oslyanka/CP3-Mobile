import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./Home";
import PostDetail from "@/Screens/PostDetail";


const Stack = createNativeStackNavigator();

//botão de navegação 
const NavigatorStack = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name ="HomeTab" component={HomeTab} options={{title:"Home"}}/>
        <Stack.Screen name ="PostDetails" component={PostDetail} options={{title:"Details"}}/>
    </Stack.Navigator>
  );
};

export default NavigatorStack;