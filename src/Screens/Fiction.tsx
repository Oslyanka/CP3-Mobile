import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";

import List from "@/Components/Posts/List";

//pega os posts do fiction, e coloca em display
const Fiction =() => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
      const { data } = await dummyApi.get<PostResponse>(`posts/tag/fiction`);
      setPosts(data.posts);
      
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    return <List posts={posts} />;
}

export default Fiction