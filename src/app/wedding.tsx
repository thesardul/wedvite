'use client';

import React, { useState } from 'react';
import Navigation from './navigation';
import QRCodeGenerator from './QRCodeGenerator';

const WeddingPage: React.FC = () => {
  const images = [
    'https://via.placeholder.com/200x200.png?text=Wedding+Image+1',
    'https://via.placeholder.com/200x200.png?text=Wedding+Image+2',
    'https://via.placeholder.com/200x200.png?text=Wedding+Image+3',
    'https://via.placeholder.com/200x200.png?text=Wedding+Image+4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <section className="hero">
        <div className="heroContent">
          <h1>Welcome to Our Wedding</h1>
          <p>Join us for a celebration of love on March 1, 2025!</p>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
        <p>We are excited to celebrate our love with you!</p>
      </section>
      <section id="venue" className="venue">
        <h2>Venue Details</h2>
        <p>Join us at the beautiful Garden Hall for our special day.</p>
      </section>
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="galleryContainer">
          <button className="prevBtn" onClick={prevImage}>Prev</button>
          <img src={images[currentIndex]} alt={`Wedding Image ${currentIndex + 1}`} className="galleryImage" />
          <button className="nextBtn" onClick={nextImage}>Next</button>
        </div>
      </section>
      <QRCodeGenerator />
      <footer>
        <p>&copy; 2025 Forever Begins Here – Sardul & Satyam.</p>
      </footer>
    </div>
  );
};

export default WeddingPage;
