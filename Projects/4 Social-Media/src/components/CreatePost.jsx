import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());

    // userIDElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userID,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then(post => addPost(post));

    addPost({
      id: Date.now().toString(),
      title: postTitle,
      body: postBody,
      reactions: reactions,
      userId: userID,
      tags: tags,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Create Post</h2>

      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user ID here
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userId"
            placeholder="Your User ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you felling today"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            ref={postBodyElement}
            id="postContent"
            rows="5"
            placeholder="Enter post content"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            number of reactions{" "}
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted into this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter your tags here"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
