/* import React, { useState } from 'react';
import './Rating.css';
const Rating = ({ initialRating = 0, totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRate) {
      onRate(newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <span
            key={i}
            className="star filled"
            onClick={() => handleClick(i)}
          >
            ★
          </span>
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(
          <span
            key={i}
            className="star half-filled"
            onClick={() => handleClick(i)}
          >
            ★
          </span>
        );
      } else {
        stars.push(
          <span
            key={i}
            className="star"
            onClick={() => handleClick(i)}
          >
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="star-container">{renderStars()}</div>;
};

export default Rating; */

import { useState } from "react";
import "./RatingProvider.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const RatingProvider = ({ initialRating = 0, totalStars = 5, onRate }) => {
  const [value, setValue] = useState(initialRating);

  const handleClick = (e, newValue) => {
    const newRating = newValue + 1;
    //console.log(newRating);
    setValue(newRating);
    if (onRate) {
      onRate(newRating);
    }
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="rating"
        style={{ color: "#F8BF00", fontSize: "1rem" }}
        value={value}
        precision={0.5}
        onChange={handleClick}
      />
    </Stack>
  );
};
export default RatingProvider;
