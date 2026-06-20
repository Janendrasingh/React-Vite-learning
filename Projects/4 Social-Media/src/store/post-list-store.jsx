import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Pass ho gye",
    body: "final year",
    reactions: 15,
    userId: "user-7",
    tags: ["MCA", "Passed"],
  },
  {
    id: "2",
    title: "Going to Kanpur",
    body: "hey",
    reactions: 2,
    userId: "user-8",
    tags: ["kanpur", "student"],
  },
];

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    console.log("Deleting post with ID:", postId);
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
