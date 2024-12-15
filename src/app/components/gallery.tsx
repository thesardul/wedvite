"use client";

import React, { useState } from "react";

const Gallery: React.FC = () => {
  const images = [
    "https://via.placeholder.com/200x200.png?text=Wedding+Image+1",
    "https://via.placeholder.com/200x200.png?text=Wedding+Image+2",
    "https://via.placeholder.com/200x200.png?text=Wedding+Image+3",
    "https://via.placeholder.com/200x200.png?text=Wedding+Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="galleryContainer">
          <button className="prevBtn" onClick={prevImage}>
            Prev
          </button>
          <img
            src={images[currentIndex]}
            alt={`Wedding Image ${currentIndex + 1}`}
            className="galleryImage"
          />
          <button className="nextBtn" onClick={nextImage}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
