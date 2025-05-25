import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";
/*importação teste*/import { FlatList, Text, View, StyleSheet } from "react-native";

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
        contentContainerStyle ={styles.container}
        ListHeaderComponent={() =>(
                <View>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                    <Text>Tags: {post.tags?.join(",")}</Text>
                </View>
            )}
            renderItem ={({item}) =>(
                <View>
                    <Text>@{item.user.username}</Text>
                    <Text>{item.body}</Text>
                    <View style={styles.reactions}>
                        <Text>Likes: {item.likes}</Text>
                    </View>
                </View>
            )}
        />

    );

    
};

const styles = StyleSheet.create({
    container: {
      padding: 6,
      gap: 4,
    },
    title: {
      fontSize: 20,
      color: "#1f1f1f",
      textAlign: "center",
    },
    tag: {

    },
    reactions: {
      flex: 1,
      flexDirection: "row",
      gap: 8,
    },
});

export default PostDetail;
