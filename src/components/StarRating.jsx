/* eslint-disable react/prop-types */
import { useState } from "react";

const StarRating = ({ maxStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };
  return (
    <div>
      <h1>Star Rating</h1>
      {new Array(maxStars).fill(1).map((_, index) => {
        const isSelectedStar = index < selectedStars;
        return isSelectedStar ? (
          <i
            className={`star  ${isSelectedStar && "active"}  bx bxs-star`}
            onClick={() => handleStarClick(index)}
          ></i>
        ) : (
          <i
            className={`star bx bx-star`}
            onClick={() => handleStarClick(index)}
          ></i>
        );
      })}
    </div>
  );
};

export default StarRating;
