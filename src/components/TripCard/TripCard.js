import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import "./TripCard.css";

const TripCard = ({ trip }) => {
  const [likes, setLikes] = useState(trip.likes || 0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(
    trip.comments?.map(c => ({ ...c, liked: false, likes: c.likes || 0, replies: c.replies || [] })) || []
  );
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);

  // Toggle like for post
  const handleLikePost = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  // Toggle like for a comment
  const handleLikeComment = (index) => {
    const updated = [...comments];
    updated[index].likes = updated[index].liked ? updated[index].likes - 1 : updated[index].likes + 1;
    updated[index].liked = !updated[index].liked;
    setComments(updated);
  };

  // Add new comment
  const handleAddComment = () => {
    if (commentText.trim() === "") return;
    setComments([...comments, { text: commentText, author: "You", likes: 0, liked: false, replies: [] }]);
    setCommentText("");
  };

  // Add reply to a comment
  const handleAddReply = (index) => {
    if (!replyText[index] || replyText[index].trim() === "") return;

    const updatedComments = [...comments];
    updatedComments[index].replies.push({
      text: replyText[index],
      author: "You",
      likes: 0,
      liked: false
    });

    setComments(updatedComments);
    setReplyText({ ...replyText, [index]: "" });
    setReplyingTo(null);
  };

  return (
    <div className="trip-card">
      <Link to={`/trip/${trip.id}`} className="trip-link">
        <div className="trip-image">
          <img src={trip.image} alt={trip.title} />
          <span className="trip-tag">{trip.tag}</span>
        </div>

        <div className="trip-user">
          <img src={trip.userPhoto} alt={trip.userName} className="user-avatar" />
          <span className="user-name">{trip.userName}</span>
        </div>

        <h3 className="trip-title">{trip.title}</h3>
        <p className="trip-description">{trip.description}</p>

        <div className="trip-meta">
          <span><FaMapMarkerAlt /> {trip.location}</span>
          <span><FaCalendarAlt /> {trip.date}</span>
        </div>
      </Link>

      {/* Like & Comment Actions */}
      <div className="trip-actions">
        <button className="like-btn" onClick={handleLikePost}>
          {liked ? <FaHeart color="red" /> : <FaRegHeart />} {likes}
        </button>
        <button className="comment-btn">
          <FaComment /> {comments.length}
        </button>
      </div>

      {/* Comments List */}
      <div className="comments-section">
        {comments.map((c, index) => (
          <div key={index} className="comment">
            <strong>{c.author}:</strong> {c.text}

            {/* Like + Reply actions for comment */}
            <div className="comment-actions">
              <button onClick={() => handleLikeComment(index)}>
                {c.liked ? <FaHeart color="red" /> : <FaRegHeart />} {c.likes}
              </button>
              <button
                className="reply-btn"
                onClick={() => setReplyingTo(replyingTo === index ? null : index)}
              >
                Reply
              </button>
            </div>

            {/* Show replies */}
            {c.replies && c.replies.length > 0 && (
              <div className="replies">
                {c.replies.map((r, i) => (
                  <div key={i} className="reply">
                    <strong>{r.author}:</strong> {r.text}
                  </div>
                ))}
              </div>
            )}

            {/* Reply input */}
            {replyingTo === index && (
              <div className="add-reply">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={replyText[index] || ""}
                  onChange={(e) =>
                    setReplyText({ ...replyText, [index]: e.target.value })
                  }
                />
                <button onClick={() => handleAddReply(index)}>Send</button>
              </div>
            )}
          </div>
        ))}

        {/* Add main comment */}
        <div className="add-comment">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleAddComment}>Comment</button>
        </div>
      </div>
      <Link to={`/trip/${trip.id}`} className="trip-link"/>

    </div>
  );
};

export default TripCard;
