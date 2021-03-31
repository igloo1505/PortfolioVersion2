import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PanaromicImageSection from "../components/componentGallery/PanaromicImageSection";
import ContactModal from "../components/ContactModal";

const ComponentGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <Navbar currentPath="gallery" />
      <PanaromicImageSection />
      <ContactModal open={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default ComponentGallery;
