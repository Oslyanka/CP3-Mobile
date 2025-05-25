import { Post } from "@/types";
import {
  fa7,
  faBook,
  faBookReader,
  faEye,
  faHeart,
  faHeartBroken,
  faRepublican,
} from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type ListItemProps = {
  post: Post;
  onPress: () =>void;
};

const ListItem = ({ post, onPress }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.title}>{post.title}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <View style={styles.reactions}>
          <FontAwesomeIcon icon={faHeart} color="red" />
          <Text>{post.reactions.likes}</Text>
          <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
          <Text>{post.reactions.dislikes}</Text>
          <FontAwesomeIcon icon={faEye} />
          <Text>{post.views}</Text>
        </View>
      </View>
    </View>
    /*
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.reactions}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        <Text>{post.reactions.likes}</Text>
        <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
        <Text>{post.reactions.dislikes}</Text>
        <FontAwesomeIcon icon={faEye} />
        <Text>{post.views}</Text>
      </View>
    </View>
    */
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    gap: 4,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderBlockColor: "#1f1f1f"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f1f1f",
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
});

export default ListItem;
