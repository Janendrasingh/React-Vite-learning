const Welcome = ({ onGetPostClick }) => {
  return (
    <center className="wel">
      <h1>Welcome to the Social Media App</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get Posts From server
      </button>
    </center>
  );
};

export default Welcome;
