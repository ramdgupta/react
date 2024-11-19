import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Rating from "./RatingProvider";

// Styled components for layout and appearance
const Container = styled.div`
  padding: 20px;
  /*   background: linear-gradient(to right, #1e3c72, #2a5298); */
  background: transparent;
  border-radius: 10px;
  width: 100%;
  color: #fff;
`;

const ReviewCard = styled.div`
  border-radius: 8px;
  padding: 15px;
  position: relative;
`;

const Avatar = styled.div`
  background-color: #12A4FF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.div`
  font-weight: bold;
`;

const DatePosted = styled.div`
  display: inline-block;
  font-size: 0.85em;
  color: #ccc;
`;

const ReviewContent = styled.p`
  margin-top: 10px;
  line-height: 1.5;
`;

const ReplyButton = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
`;

const ReplyContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin-top: 10px;
  margin-left: 50px;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 5px;
  margin-top: 10px;
  background:transparent;
  border-radius: 5px;
  border: .5px solid #ffffff;
  width: calc(100% - 20px);
`;

const AddReplyButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #5a75e3;
  color: white;
  cursor: pointer;
`;

const Span = styled.span`
  display: inline-block;
  margin-left: 12px;
`;

const reviewsData = [
  {
    id: 1,
    username: "Harihar S",
    date: "24 Oct 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    rating: 4.5,
    replies: [
      {
        id: 1,
        username: "Shiv Shankar",
        date: "24 Oct 2023",
        content: "Thank you for your feedback!",
      },
    ],
  },
  {
    id: 2,
    username: "Shiv Shankar",
    date: "24 Oct 2023",
    content:
      "Great application! Really loved the features and user experience.",
    rating: 5,
    replies: [
        {
            id: 1,
            username: "Shiv Shankar",
            date: "24 Oct 2023",
            content: "Thank you for your feedback!",
          },
    ],
  },
];

const Review = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReply, setNewReply] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleReplyClick = (reviewId) => {
    setReplyingTo(reviewId);
  };

  const handleAddReply = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return {
          ...review,
          replies: [
            ...review.replies,
            {
              id: review.replies.length + 1,
              username: "Current User",
              date: new Date().toLocaleDateString(),
              content: newReply,
            },
          ],
        };
      }
      return review;
    });
    setReviews(updatedReviews);
    setNewReply("");
    setReplyingTo(null);
  };

  return (
    <Container>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <UserInfo>
            <Avatar>{review.username.charAt(0)}</Avatar>
            <div>
              <Username>{review.username}</Username>
              <DatePosted>Posted on: {review.date}</DatePosted>
              <Span>
                <Rating initialRating={review.rating} />
              </Span>
            </div>
          </UserInfo>
          <ReviewContent>{review.content}</ReviewContent>
          <ReplyButton onClick={() => handleReplyClick(review.id)}>
            <FontAwesomeIcon icon={faReply} /> Reply
          </ReplyButton>

          {/* Reply section */}
          {review.replies.map((reply) => (
            <ReplyContainer key={reply.id}>
              <UserInfo>
                <Avatar>{reply.username.charAt(0)}</Avatar>
                <div>
                  <Username>{reply.username}</Username>
                  <DatePosted>Posted on: {reply.date}</DatePosted>
                </div>
              </UserInfo>
              <ReviewContent>{reply.content}</ReviewContent>
              <ReplyButton onClick={() => handleReplyClick(review.id)}>
            <FontAwesomeIcon icon={faReply} /> Reply
          </ReplyButton>
            </ReplyContainer>
          ))}

          {/* Input for adding new reply */}
          {replyingTo === review.id && (
            <div>
              <Input
                type="text"
                placeholder="Write a reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <AddReplyButton onClick={() => handleAddReply(review.id)}>
                Add Reply
              </AddReplyButton>
            </div>
          )}
        </ReviewCard>
      ))}
    </Container>
  );
};

export default Review;
