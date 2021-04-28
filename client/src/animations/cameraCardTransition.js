import { gsap } from "gsap";

const reAlignLayoutToOpen = () => {
  let pcLayout = document.getElementsByClassName("product");
  const productCardLayout = pcLayout[0].getBoundingClientRect();
  console.log("productCardLayout: ", productCardLayout);
  let layoutTimeline = gsap.timeline();
  layoutTimeline.to(".product", {
    // display: "grid",
    // gridTemplateColumns: "0.9fr 1fr",
    // width: `${Math.floor(productCardLayout.width) * 2}px`,
    scaleX: 2,
    transformOrigin: "100% 50%",
    // widthPercent: 200,
    margin: "auto",
    // padding: "2.5em 0",
    // min-width: 600px;
    // max-width: 900px;
    backgroundColor: "#fff",
    borderRadius: "5px",
    // duration: 2,
    ease: "Power4.easeOut",
  });
  layoutTimeline.to("product__photo", {
    marginLeft: "100%",
    duration: 1,
    ease: "Power4.easeOut",
  });
  //   gsap.to(".photo-main img", {
  //     scaleX: 1,
  //   });
  gsap.to(".photo-container", {
    position: "absolute",
    width: "50%",
    // gridTemplateRows: "1fr",
    height: "100%",
    // borderRadius: "6px",
    // boxShadow: "4px 4px 25px -2px rgb(0 0 0)",
    // delay: 0.2,
  });
  layoutTimeline.to(".product__info", {
    // display: "grid",
    // gridTemplateColumns: "0.9fr 1fr",
    width: "50%",
    textAlign: "center",
    // margin: "auto 10px",
    backgroundColor: "#fff",
    scaleX: 1,
    float: "right",
    borderRadius: "5px",
    duration: 0.2,
  });
};

export const transitionToOpen = () => {
  reAlignLayoutToOpen();

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

const handleToggleState = (prevState) => {
  // passed in as isOpen before changing state in component
  if (prevState === true) {
    transitionToOpen();
  }
};
