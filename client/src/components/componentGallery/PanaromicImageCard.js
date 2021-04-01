import React, { Fragment } from "react";
import { gsap } from "gsap";

const PanaromicImageCard = ({
  frontImage,
  backImage,
  index,
  animationPhase,
  setAnimationPhase,
}) => {
  const initialAnimationDelay = 1000;
  const flipCardHorizontally = () => {
    gsap.to(`.innerCardDiv${index}`, {
      duration: 0.2,
      rotateY: 180,
    });
    if (index === 8 && animationPhase === 1) {
      setTimeout(() => {
        console.log("setting animation phase...");
        setAnimationPhase(2);
        // gsap.to(".innerCardDiv", {
        //   duration: 0,
        //   rotateY: 0,
        // });
        gsap.to(".cardBack", {
          duration: 0,
          rotateY: 0,
        });
        gsap.to(".horizontalStackedCardPhaseOne", {
          duration: 0,
          display: "none",
        });
        gsap.to(".horizontalStackedCardPhaseTwo", {
          duration: 0,
          zIndex: 0,
          display: "block",
        });
      }, 1000);
    }
  };
  let delay;
  if (index === 1) {
    delay = initialAnimationDelay;
  } else {
    delay = initialAnimationDelay + index * 200;
  }
  if (animationPhase === 1) {
    setTimeout(() => {
      flipCardHorizontally();
    }, delay);
  }
  const styles = {
    phaseTwo: {
      transform: "rotateY(0deg)",
      transition: "transform 0.0s",
    },
    // phaseTwo: {},
  };

  return animationPhaseOneContent(
    frontImage,
    backImage,
    animationPhase,
    styles,
    index
  );
};

const animationPhaseOneContent = (
  frontImage,
  backImage,
  animationPhase,
  styles,
  index
) => {
  return (
    <Fragment>
      <div className="horizontalStackedCard horizontalStackedCardPhaseOne">
        <div
          className={`innerCardDiv innerCardDiv${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardFront">
            <img className="cardImage" src={frontImage} alt="front of card" />
          </div>
          <div className="cardBack">
            <img className="cardImage" src={backImage} alt="back of card" />
          </div>
        </div>
      </div>
      <div className="horizontalStackedCard horizontalStackedCardPhaseTwo">
        <div
          className={`innerCardDiv innerCardDiv${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardBackPhaseTwo">
            <img className="cardImage" src={backImage} alt="back of card" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const animationPhaseTwoContent = (backImage, animationPhase, styles, index) => {
  return (
    <div className="horizontalStackedCard horizontalStackedCardPhaseTwo">
      <div
        className={`innerCardDiv innerCardDiv${index}`}
        style={animationPhase === 2 ? styles.phaseTwo : {}}
      >
        <div className="cardBackPhaseTwo">
          <img className="cardImage" src={backImage} alt="back of card" />
        </div>
      </div>
    </div>
  );
};

export default PanaromicImageCard;
