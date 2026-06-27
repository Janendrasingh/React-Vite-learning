import { PostListContext } from "../store/post-list-store";
import { useContext, useState } from "react";
import Post from "./Post";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [dataFetched, setDataFetched] = useState(false);

  if(!dataFetched) {
    // Logic to fetch posts from the server can be added here
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
      setDataFetched(true);
  };

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
