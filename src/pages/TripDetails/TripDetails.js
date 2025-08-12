import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/buttons/buttons";
import CommentCard from "../../components/comment/commentCard"; // نفس كومبوننت الكومنت من الهوم
import "./TripDetails.css";

// بيانات تجريبية
const tripsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Adventure in Siwa Oasis",
    tag: "Nature",
    location: "Siwa, Egypt",
    date: "2025-08-12",
    user: "Ahmed Ali",
    userPhoto: "https://i.pravatar.cc/150?img=3",
    description: "A magical trip exploring Siwa Oasis and its hidden gems.",
    likes: 10,
    comments: [
      {
        id: 1,
        user: "Sara",
        text: "Wow! This looks amazing 😍",
        likes: 2,
        replies: []
      }
    ]
  }
];

export default function TripDetails() {
  const { id } = useParams();
  const trip = tripsData.find((t) => t.id === parseInt(id));
  const [likes, setLikes] = useState(trip.likes);
  const [comments, setComments] = useState(trip.comments);

  if (!trip) return <p>Trip not found</p>;

  const handleLike = () => {
    setLikes((prev) => (prev === trip.likes ? prev + 1 : prev - 1));
  };

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      user: "You",
      userPhoto: "https://i.pravatar.cc/150?img=1",
      text,
      likes: 0,
      replies: []
    };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="trip-details-container">
      <img src={trip.image} alt={trip.title} className="trip-cover" />

      <div className="trip-info">
        <h1 className="trip-title">{trip.title}</h1>
        <div className="trip-meta">
          <span className="trip-tag">{trip.tag}</span>
          <span className="trip-location">📍 {trip.location}</span>
          <span className="trip-date">📅 {trip.date}</span>
        </div>

        <div className="trip-user">
          <img src={trip.userPhoto} alt={trip.user} className="user-avatar" />
          <span className="user-name">{trip.user}</span>
        </div>

        <p className="trip-description">{trip.description}</p>

        <div className="trip-actions">
          <Button
            variant="primary"
            text={`👍 Like (${likes})`}
            onClick={handleLike}
          />
          <Button
            variant="secondary"
            text={`💬 Comment (${comments.length})`}
            onClick={() => document.getElementById("comment-input").focus()}
          />
        </div>

        <div className="trip-comments">
          <h3>Comments</h3>
          <div className="add-comment">
            <input
              type="text"
              id="comment-input"
              placeholder="Write a comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  handleAddComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
          {comments.map((c) => (
            <CommentCard key={c.id} comment={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
