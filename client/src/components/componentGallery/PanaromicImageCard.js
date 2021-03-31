import React from "react";
import { gsap } from "gsap";

const PanaromicImageCard = ({ frontImage, backImage, index }) => {
  const initialAnimationDelay = 1000;
  const flipCardHorizontally = () => {
    gsap.to(`.innerCardDiv${index}`, {
      duration: 0.2,
      rotateY: 180,
    });
  };
  let delay;
  if (index === 1) {
    delay = initialAnimationDelay;
  } else {
    delay = initialAnimationDelay + index * 200;
  }
  setTimeout(() => {
    flipCardHorizontally();
    console.log("delay: ", delay, index);
  }, delay);
  console.log("Index!!! ", index);
  return (
    <div className="horizontalStackedCard" onClick={() => console.log(index)}>
      <div className={`innerCardDiv innerCardDiv${index}`}>
        <div className="cardFront">
          <img className="cardImage" src={frontImage} alt="front of card" />
        </div>
        <div className="cardBack">
          <img className="cardImage" src={backImage} alt="back of card" />
        </div>
      </div>
    </div>
  );
};

export default PanaromicImageCard;
