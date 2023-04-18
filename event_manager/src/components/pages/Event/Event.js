import "./Event.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { useState } from "react";

const Event = ({ event }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, newComment]);
    e.target.reset();
  };

  const handleDeleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setNumLikes(numLikes + 1);
    } else {
      setLiked(false);
      setNumLikes(numLikes - 1);
    }
  };

  return (
    <div className="Event">
      <div className="name">
        <span>{event.name}</span>
      </div>
      <div className="category">
        <span>
          {event.category}
          <br />
          <br />
        </span>
      </div>
      <div className="content">
        <span>{event.desc}</span>
      </div>
      <div className="details">
        <p>
          When: {event.timedate} <br />
          Where: {event.location} <br />
          Phone: {event.contactphone} <br />
          Email: {event.contactemail} <br />
        </p>
      </div>
      <div className="info">
        <div className="item" onClick={handleLike}>
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          {numLikes} Likes
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon />
          {comments.length} Comments
        </div>
      </div>
      <div className={`comment-section${commentOpen ? " open" : ""}`}>
        {commentOpen && (
          <div>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  {comment} 
                  <button onClick={() => handleDeleteComment(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={handleAddComment}>
              <input type="text" name="comment" placeholder="Add a comment" />
              <button type="submit">
                Add Comment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
