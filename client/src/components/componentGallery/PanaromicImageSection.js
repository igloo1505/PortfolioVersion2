import React from "react";
import PanaromicImageCard from "./PanaromicImageCard";
import frontImageOne from "../../assets/slicedImages/frontOfCard/image_part_001.jpg";
import frontImageTwo from "../../assets/slicedImages/frontOfCard/image_part_002.jpg";
import frontImageThree from "../../assets/slicedImages/frontOfCard/image_part_003.jpg";
import frontImageFour from "../../assets/slicedImages/frontOfCard/image_part_004.jpg";
import frontImageFive from "../../assets/slicedImages/frontOfCard/image_part_005.jpg";
import frontImageSix from "../../assets/slicedImages/frontOfCard/image_part_006.jpg";
import frontImageSeven from "../../assets/slicedImages/frontOfCard/image_part_007.jpg";
import frontImageEight from "../../assets/slicedImages/frontOfCard/image_part_008.jpg";
import backImageOne from "../../assets/slicedImages/backOfCard/image_part_001.jpg";
import backImageTwo from "../../assets/slicedImages/backOfCard/image_part_002.jpg";
import backImageThree from "../../assets/slicedImages/backOfCard/image_part_003.jpg";
import backImageFour from "../../assets/slicedImages/backOfCard/image_part_004.jpg";
import backImageFive from "../../assets/slicedImages/backOfCard/image_part_005.jpg";
import backImageSix from "../../assets/slicedImages/backOfCard/image_part_006.jpg";
import backImageSeven from "../../assets/slicedImages/backOfCard/image_part_007.jpg";
import backImageEight from "../../assets/slicedImages/backOfCard/image_part_008.jpg";

const PanaromicImageSection = () => {
  const cardArray = [
    new ImageCard(frontImageOne, backImageOne, 1),
    new ImageCard(frontImageTwo, backImageTwo, 2),
    new ImageCard(frontImageThree, backImageThree, 3),
    new ImageCard(frontImageFour, backImageFour, 4),
    new ImageCard(frontImageFive, backImageFive, 5),
    new ImageCard(frontImageSix, backImageSix, 6),
    new ImageCard(frontImageSeven, backImageSeven, 7),
    new ImageCard(frontImageEight, backImageEight, 8),
  ];
  return (
    <div className="gallerySection">
      <h1>ImageSection</h1>
      <div className="horizontalCardStack">
        {cardArray.map((im, index) => (
          <PanaromicImageCard
            key={index}
            frontImage={im.frontImage}
            backImage={im.backImage}
            index={im.index}
          />
        ))}
      </div>
    </div>
  );
};

class ImageCard {
  constructor(frontImage, backImage, index) {
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.index = index;
  }
}

export default PanaromicImageSection;
