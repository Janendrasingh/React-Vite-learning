import { PostListContext } from "../store/post-list-store";
import { useContext, useEffect } from "react";
import Post from "./Post";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
useEffect(() =>  {
    // Logic to fetch posts from the server can be added here
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });

    }, {})


  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
