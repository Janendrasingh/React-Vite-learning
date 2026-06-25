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
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if(action.type === "ADD_POST") {
    newPostList = [ action.payload, ...currPostList ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userID, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
