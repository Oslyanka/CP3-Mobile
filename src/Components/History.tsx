import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { dummyApi } from "../api";
import { Post, PostResponse } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

const History = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const { data } = await dummyApi.get<PostResponse>("posts/tag/history");
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <View style={{padding: 10}}>
          <Text>{item.title}</Text>
          <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
            <FontAwesomeIcon icon={faHeart} color="red" />
            <Text>{item.reactions.likes}</Text>
            <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
            <Text>{item.reactions.likes}</Text>
            <FontAwesomeIcon icon={faEye} />
            <Text>{item.views}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default History;
