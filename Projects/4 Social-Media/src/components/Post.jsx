import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteOutline />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge rounded-pill text-bg-primary hastag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          👍 Likes: {post.reactions.likes} | 👎 Dislikes:{" "}
          {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
