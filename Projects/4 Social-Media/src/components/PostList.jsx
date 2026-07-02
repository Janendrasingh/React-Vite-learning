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

    const controller = new AbortController();
    const signal = controller.signal;
    // Logic to fetch posts from the server can be added here
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return () =>{
        console.log("PostList component unmounted");
        controller.abort();
      }
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
