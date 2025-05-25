import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {  faHeart } from "@fortawesome/free-solid-svg-icons";
/*importação teste*/import { FlatList, Text, View, StyleSheet } from "react-native";
import { tags } from "react-native-svg/lib/typescript/xmlTags";

//import List from "@/Components/Posts/List";

const PostDetail = () => {
    const route = useRoute();
    //const {id} = route.params as {id:number};
    const { postId: id } = route.params as { postId: number };
    const [post, setPost] = useState<Post|any>(null);
    const [comments, setComments] = useState<any[]>([])

    const fetchPostDetails = async () => {
        try {
          const postResponse = await dummyApi.get(`/posts/${id}`);
          setPost(postResponse.data);
      
          const commentResponse = await dummyApi.get(`/comments/post/${id}`);
          setComments(commentResponse.data.comments); // check if this is `.comments` or plain array
        } catch (error) {
          console.error("Failed to fetch post details:", error);
        }
    };
      

    useEffect(() =>{
        fetchPostDetails();
    }, []);

    if (!post) return <Text>Loading...</Text>;

    return(
        <FlatList 
        data ={comments} 
        keyExtractor={(item) =>item.id.toString()} 
        contentContainerStyle ={styles.listContent}
        ListHeaderComponent={() =>(
                <View style={styles.body}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                    <Text style = {styles.tags}>Tags: {post.tags?.join(",")}</Text>
                </View>
            )}
            renderItem ={({item}) =>(
                <View style={styles.commentCard}>
                    <Text style ={styles.user}>@{item.user.username}</Text>
                    <Text>{item.body}</Text>
                    <View style={styles.reactions}>
                        <FontAwesomeIcon icon={faHeart} color="red" />
                        <Text>{item.likes}</Text>
                    </View>
                </View>
            )}
        />

    );

    
};


const styles = StyleSheet.create({
  listContent: {
    padding: 12,
    paddingBottom: 50,
  },
  user: {
    fontWeight: "600"
  },
  tags: {
    fontWeight: "500",
    marginTop: 15
  },
  commentCard: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1f1f1f",
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f1f1f",
    marginBottom: 8,
  },
  body:{
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  reactions: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
});



export default PostDetail;
