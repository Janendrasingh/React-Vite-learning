const CreatePost = () => {
  return (
    <div className="container mt-4">
      <h2>Create Post</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="postContent"
            rows="5"
            placeholder="Enter post content"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
