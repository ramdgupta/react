import React from "react";
import "./Banner.css";
import home from "../assets/images/home-appliances.png";
import travel from "../assets/images/travel-scene.png";
import digital from "../assets/images/digital-marketing.png";
import explore from "../assets/images/explore.png";
import BannerCard from "./BannerCard";

const Banner = () => {
  const cardData = [
    {
      id: 1,
      title: "Assembly Line Flow variation added",
      src: home,
      alt: "appliances",
    },
    {
      id: 2,
      title: "New update for travel & tourism",
      src: travel,
      alt: "travel",
    },
    {
      id: 3,
      title: "Digital marketing support",
      src: digital,
      alt: "digital-marketing",
    },
    {
      id: 4,
      title: "Collaborate with external stakeholders",
      src: explore,
      alt: "explore",
    }
  ];
  return (
    <div className="banner">
      <h1>Stay ahead of the curve with</h1>
      <h1>
        <span>Enterprise AI Foundry</span>
      </h1>
      <div className="row cards">
        {cardData.map((card) => {
          return <BannerCard className={"card col-sm-3"} key={card.id} title={card.title} src={card.src} alt={cardData.alt} />;
        })}
      </div>
    </div>
  );
};

export default Banner;
