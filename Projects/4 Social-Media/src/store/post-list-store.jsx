import { createContext, useEffect,useReducer, useCallback, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  console.log(action);
  console.log(action);

  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    // Logic to fetch posts from the server can be added here
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, {});

  const addPost = (post) => {
    console.log("Adding post:", post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    console.log("Adding initial posts:", posts);
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts: posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider
      value={{ postList, fetching, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
