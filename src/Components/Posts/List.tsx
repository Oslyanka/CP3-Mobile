import { Post } from "@/types";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {RootStackParamList} from "@/types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList,"PostDetails">;
type ListProps = {
  posts: Post[];
};

const List = ({ posts }: ListProps) => {
  const navigation = useNavigation<NavigationProps>();

  const handlePress = (postId:number) =>{
    navigation.navigate("PostDetails",{postId});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ( 
        <ListItem post={item} onPress={() => handlePress(item.id)} />)}/>
    </View>
  );
};

// Adiciona a scroll wheel (estavamos com um problema e esta foi a unica maneira de concertar)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
