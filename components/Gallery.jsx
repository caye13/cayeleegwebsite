"use client";
import { useState } from "react";
import "../styles/gallery.css"


const Gallery = () => {
  const images = [
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/hands1.jpeg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/nevadaFallsHike.jpeg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/band.JPG",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/musicPro2.jpg",
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`art${index + 1}`}
            className={`gallery-image ${index === current ? "active" : ""}`}
          />
        ))}
      </div>
      <button className="arrow left-arrow" onClick={prevImage}>
        &lt;
      </button>
      <button className="arrow right-arrow" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Gallery;
