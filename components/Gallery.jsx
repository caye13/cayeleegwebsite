"use client";
import { useState } from "react";
import "../styles/gallery.css"
import Image from 'next/image';


const Gallery = () => {
  const images = [
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/hands1.jpeg",
    // "https://raw.githubusercontent.com/caye13/my-website-photos/main/belvedere2.jpg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/tennis.png",
    // "https://raw.githubusercontent.com/caye13/my-website-photos/main/mumfacebook.jpg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/cocolove.jpeg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/nevadaFallsHike.jpeg",
    "https://raw.githubusercontent.com/caye13/my-website-photos/main/baseball.png",
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
          <Image
            key={index}
            src={src}
            alt={`art${index + 1}`}
            height={400}
            width={600}
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
