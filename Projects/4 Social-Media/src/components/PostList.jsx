import { PostListContext } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpiner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    // Logic to fetch posts from the server can be added here
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, {});

  return (
    <>
      { fetching &&  <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
