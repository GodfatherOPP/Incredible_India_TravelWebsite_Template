import React from "react";
import likePng from "../Assets/like.png";
import ratingPng from "../Assets/rating.png";
import arrowPng from "../Assets/arrow.png";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card_feedback">
        <div className="card_like">
          <img src={likePng} className="likeIcon" />
          <span>Like</span>
        </div>
        <div className="card_Rating">
          <img src={ratingPng} className="rating_Icon" />
        </div>
      </div>
      <p className="card_placeName">{data.placeName}</p>
      <img src={data.placeImage} className="card_placeImage" />
      <div className="card_moreDetail">
        <span>
          <a href="#">More Details</a>
        </span>

        <span>
          <a href="#">
            Plans <img src={arrowPng} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
