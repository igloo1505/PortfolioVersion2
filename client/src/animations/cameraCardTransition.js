import { gsap } from "gsap";
import { getDimensionsFromClassName } from "../utilityFunctions";

const reAlignLayoutToOpen = () => {
  let pcLayout = document.getElementsByClassName("product");
  const productCardLayout = pcLayout[0].getBoundingClientRect();

  let layoutTimeline = gsap.timeline();
  //   layoutTimeline.to(".product", {
  //     // display: "grid",
  //     // gridTemplateColumns: "0.9fr 1fr",
  //     // width: `${Math.floor(productCardLayout.width) * 2}px`,
  //     scaleX: 2,
  //     transformOrigin: "100% 50%",
  //     // widthPercent: 200,
  //     margin: "auto",
  //     // padding: "2.5em 0",
  //     // min-width: 600px;
  //     // max-width: 900px;
  //     backgroundColor: "#fff",
  //     borderRadius: "5px",
  //     // duration: 2,
  //     ease: "Power4.easeOut",
  //   });
  //   layoutTimeline.to("product__info", {
  //     // marginLeft: "100%",
  //     padding: "0.8em 0",
  //     position: "relative",
  //     display: "block",
  //     // transform: "translateX(0%)",
  //     zIndex: -5,
  //     duration: 1,
  //     ease: "Power4.easeOut",
  //   });

  let dims = getDimensionsFromClassName("photo-container");
  layoutTimeline.to(".photo-container", {
    // position: "absolute",
    // display: "grid",
    // grid-template-rows: 1fr,
    // gridTemplateRows: "1fr",
    width: "100%",
    transform: `translateX(-${dims.width / 2}px)`,
    height: "100%",
    borderRadius: "6px",
    boxShadow: "4px 4px 25px -2px rgb(0 0 0 / 30%)",
    duration: 1,
    ease: "Power4.easeOut",
  });

  layoutTimeline.to(
    ".imageWrapper img",
    {
      transform: "translate3d(-100px, -20px, 0px) scale(1.2)",
    },
    "-=1"
  );

  gsap.to(".product__info", {
    padding: "0.8em 1em",
    position: "relative",
    display: "block",
    zIndex: -5,
    background: "#fff",
    borderRadius: "10px",
    transform: `translateX(${dims.width / 2}px)`,
    duration: 1,
    ease: "Power4.easeOut",
  });

  //   gsap.to(".photo-main img", {
  //     scaleX: 1,
  //   }),
  //   gsap.to(".photo-container", {
  //     position: "absolute",
  //     width: "50%",
  //     // gridTemplateRows: "1fr",
  //     height: "100%",
  //     // borderRadius: "6px",
  //     // boxShadow: "4px 4px 25px -2px rgb(0 0 0)",
  //     // delay: 0.2,
  //   });
  //   layoutTimeline.to(".product__info", {
  //     // display: "grid",
  //     // gridTemplateColumns: "0.9fr 1fr",
  //     width: "50%",
  //     textAlign: "center",
  //     // margin: "auto 10px",
  //     backgroundColor: "#fff",
  //     scaleX: 1,
  //     float: "right",
  //     borderRadius: "5px",
  //     duration: 0.2,
  //   });
};

const reAlignLayoutToClosed = () => {
  console.log("realign to closed layout here");
};

export const transitionToOpen = (wasOpen) => {
  if (wasOpen === false) {
    reAlignLayoutToOpen();
  } else if (wasOpen === true) {
    reAlignLayoutToClosed();
  }

  //   gsap.to(".photo-container", {
  //     position: "absolute",
  //     width: "50%",
  //     gridTemplateRows: "1fr",
  //     height: "100%",
  //     borderRadius: "6px",
  //     boxShadow: "4px 4px 25px -2px rgb(0 0 0)",
  //     delay: 0.2,
  //   });
  //   gsap.to(".product__photo", {
  //     // display: "grid",
  //     // gridTemplateColumns: "0.9fr 1fr",
  //     width: "100%",
  //     margin: "auto 10px",
  //     // padding: "2.5em 1em",
  //     // min-width: 600px;
  //     // max-width: 900px;
  //     backgroundColor: "#fff",
  //     borderRadius: "5px",
  //     duration: 0.2,
  //   });
  //   gsap.to(".photo-album", {
  //     transform: "translateY(0px)",
  //     zIndex: 1,
  //     duration: 0.4,
  //     delay: 0.4,
  //   });

  //   gsap.to(".description ul", {
  //     listStyleType: "none",
  //   });
};
