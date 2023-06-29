import React, { useState } from "react";
import "./cardCarousel.css";
import avatar from "../../assets/Lolla 1.png";
import star from '../../assets/Frame 20.png'
const CardCarousel = () => {
  const carouselData = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
    { id: 7, title: "Card 7" },
    { id: 8, title: "Card 8" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNextCards = () => {
    const nextIndex = (startIndex + 1) % carouselData.length;
    if (nextIndex <= carouselData.length - 3) {
      setStartIndex(nextIndex);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <>
      {" "}
      <div className="carousel">
        <div className="cardRowContainer">
          {carouselData.slice(startIndex, startIndex + 3).map((card) => (
            <div className="cardRow" key={card.id}>
              <div className="avatar">
                <div className="avatarContent">
                  <img src={avatar} alt="avatar" height="60px" width="60px" />
                  <div className="avatarText">
                    <p className="name">Lolla Smith</p>
                    <img src={star} alt="star"/>
                  </div>
                </div>
              </div>
              <div className="customerReview">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={handleNextCards}>
          &gt;
        </button>
      </div>
      <div className="carouselDotContainer">
        {carouselData.map((card, index) => (
          <div
            key={card.id}
            className={`carouselDot ${startIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </>
  );
};

export default CardCarousel;
