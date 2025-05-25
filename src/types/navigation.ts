type Home = {
  History: undefined;
  Fiction: undefined;
  PostDetail: {postId: number};
};

type RootStackParamList ={
  Tabs: undefined;
  PostDetails: {postId: number};
}

export { Home,RootStackParamList };
