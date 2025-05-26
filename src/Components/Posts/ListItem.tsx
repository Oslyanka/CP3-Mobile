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

//ícones de like, deslike e visualização
const ListItem = ({ post, onPress }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{post.title}</Text>
      </TouchableOpacity>
      <View style={styles.reactions}>
        <View style={styles.reactionGroup}>
          <FontAwesomeIcon icon={faHeart} color="red" />
          <Text style={styles.reactionText}>{post.reactions.likes}</Text>
        </View>
        <View style={styles.reactionGroup}> 
          <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" /> 
          <Text style={styles.reactionText}>{post.reactions.dislikes}</Text>
        </View>
        <View style={styles.reactionGroup}>
          <FontAwesomeIcon icon={faEye} />
          <Text style={styles.reactionText}>{post.views}</Text>
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


// modificações visuais da lista
const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1f1f1f",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f1f1f",
    marginBottom: 8,
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  reactionGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  reactionText: {
    marginLeft: 4,
    fontWeight: "600",
    color: "#444",
  },
});


export default ListItem;
