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

  

  

  const jiggleAnimation = () => {
    let cardStack = document.getElementsByClassName("horizontalCardStack");
    cardStack = cardStack[0];
    const style = getComputedStyle(cardStack);
    let emHeight = style.height.slice(0, style.height.length - 2);
    emHeight = parseInt(emHeight);
    let verticalOffset = cardStack.getBoundingClientRect()
    verticalOffset = verticalOffset.y
    const vh = Math.max(document.documentElement.clientHeight);
    // const dropToCenter = (vh - verticalOffset) / 2 - emHeight / 2;
    // const dropToCenter = (vh / 2 - ((verticalOffset + emHeight) / 2))
    const dropToCenter = ((vh - verticalOffset * 2 - emHeight) / 2)
    console.log("Calculation adjust here...", ((vh - verticalOffset * 2 - emHeight) / 2))

    if(index === 8){ 
    console.log("vh", vh);
    console.log("verticalOffset", verticalOffset);
    console.log("emHeight", emHeight);
    console.log("dropToCenter", dropToCenter);
    }

    // gsap.to(`.horizontalCardStack`, {
    //   duration: 0.5,
    //   // display: "block",
    //   // transform: "translateY(50px)",
    //   transform: "translateY(50px)",
    //   ease: "bounce.out",
    // });
    gsap.to(`.horizontalStackedCard${index}`, {
      duration: 0.5,
      // display: "block",
      // transform: "translateY(50px)",
      transform: `translateY(${dropToCenter}px)`,
      ease: "bounce.out",
    });
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
  if (animationPhase === 2) {
    setTimeout(() => {
      jiggleAnimation();
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
      <div
        className={`horizontalStackedCard horizontalStackedCardPhaseTwo horizontalStackedCard${index}`}
      >
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
    <div
      className={`horizontalStackedCard horizontalStackedCardPhaseTwo horizontalStackedCard${index}`}
    >
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
