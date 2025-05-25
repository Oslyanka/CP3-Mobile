type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    title: string;
    body: string;
    reactions: Reaction;
    views: number;
    user: string;
    likes: number
    //comments: Comment
}

type PostResponse = {
    posts: Post[]
}

/*
type User = {
    id: number;
    username: string;
    fullName: string
}

type Comment = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User

}
*/
export {PostResponse, Post}