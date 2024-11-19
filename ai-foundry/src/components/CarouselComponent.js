/* import "./CarouselComponent.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import CarouselImage from "./CarouselImage";
import styled from "styled-components";

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;
const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
  border: ${(props) => (props.isActive ? "2px solid #fff" : "none")};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
const CarouselComponent = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Carousel activeIndex={currentIndex} onSelect={handleThumbnailClick}>
      <Carousel.Item>
        <CarouselImage alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage alt="Third slide" />
        <Carousel.Caption>
          <ThumbnailsContainer>
            {images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                isActive={index === currentIndex}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </ThumbnailsContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComponent; */

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import screenshot1 from "../assets/images/screenshot-1.jpg";
import screenshot2 from "../assets/images/screenshot-2.jpg";
import screenshot3 from "../assets/images/screenshot-3.jpg";
import screenshot4 from "../assets/images/screenshot-4.jpg";
import screenshot5 from "../assets/images/screenshot-5.jpg";

// Sample images (Replace with your own image URLs)
const images = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
];

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  margin: auto;
`;

const MainImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 320px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;
const SubImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 150px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 100;
  opacity: 0.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  overflow-x: auto;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
  border: ${(props) => (props.isActive ? "2px solid #fff" : "none")};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ArrowButton = styled.button`
  position: relative;
  top: 1.8rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  display: ${(props) => (props.show ? "block" : "none")};

  svg {
    color: #ffffff;
  }
  svg:hover {
    color: #000000;
  }

  &:hover {
    background: transparent;
    transition: transform 0.2s;
  }
  &:clicked {
    color: blue;
  }

  ${(props) => (props.left ? `left: -20px;` : `right: -20px;`)}
`;

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <CarouselContainer>
        <ArrowButton left show={images.length > 1} onClick={handlePrevious}>
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faCircleChevronLeft}
          />
        </ArrowButton>
        <SubImage>
          <img
            src={images[currentIndex - 1]}
            alt={`Slide ${currentIndex - 1}`}
          />
        </SubImage>
        <MainImage>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </MainImage>
        <SubImage>
          <img
            src={images[currentIndex + 1]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </SubImage>
        <ArrowButton right show={images.length - 1} onClick={handleNext}>
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faCircleChevronRight}
          />
        </ArrowButton>
      </CarouselContainer>
      <ThumbnailsContainer>
        {images.map((img, index) => (
          <Thumbnail
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            isActive={index === currentIndex}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </ThumbnailsContainer>
    </div>
  );
};

export default CarouselComponent;
