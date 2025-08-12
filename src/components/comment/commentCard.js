import React, { useState } from "react";
import Button from "../buttons/buttons";
import "./commentCard.css";

export default function CommentCard({ comment }) {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleReply = (text) => {
    const newReply = {
      id: Date.now(),
      user: "You",
      userPhoto: "https://i.pravatar.cc/150?img=5",
      text,
      likes: 0
    };
    setReplies([...replies, newReply]);
    setShowReplyInput(false);
  };

  return (
    <div className="comment-card">
      <div className="comment-header">
        <img src={comment.userPhoto} alt={comment.user} className="comment-avatar" />
        <span className="comment-user">{comment.user}</span>
      </div>

      <p className="comment-text">{comment.text}</p>

      <div className="comment-actions">
  <button
    className={`btn-like ${liked ? "liked" : ""}`}
    onClick={handleLike}
  >
    👍 {likes}
  </button>
  <button
    className="btn-reply"
    onClick={() => setShowReplyInput(!showReplyInput)}
  >
    💬 Reply
  </button>
</div>


      {showReplyInput && (
        <input
          type="text"
          className="reply-input"
          placeholder="Write a reply..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim()) {
              handleReply(e.target.value);
              e.target.value = "";
            }
          }}
        />
      )}

      {replies.length > 0 && (
        <div className="comment-replies">
          {replies.map((r) => (
            <div key={r.id} className="reply">
              <img src={r.userPhoto} alt={r.user} className="reply-avatar" />
              <div>
                <span className="reply-user">{r.user}</span>
                <p className="reply-text">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
