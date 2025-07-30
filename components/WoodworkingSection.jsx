'use client';

import { Covered_By_Your_Grace } from 'next/font/google';
import React from 'react';

const Image = ({ src, alt, width, height, layout, objectFit, className }) => {
  const handleError = (e) => {
    e.target.src = `https://placehold.co/${width}x${height}/CCCCCC/333333?text=Image+Unavailable`;
    e.target.onerror = null;
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      className={className}
      style={{ objectFit: objectFit, width: '100%', height: '100%' }}
    />
  );
};


const WoodworkingSection = () => {
  const photos = [
    {
      src: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/workshop.JPEG',
      alt: 'USC Woodshop',
      title: 'USC Woodshop',
      description: '',
      type: 'woodshop',
    },
    {
      src: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/woodenflowers.png',
      alt: 'wooden flowers',
      title: 'Wooden Flowers',
      description: 'Used a handplaner to shave slim pieces of wood to shape into petals',
    },
    {
      src: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/joints.JPEG',
      alt: 'joints',
      title: 'Joints',
      description: 'Using c-clamps on 1.5x1.5x10in hardwood to chisel halfway cuts and flush out a cross',
      type: 'project',
    },
    {
      src: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/workshop2.jpg',
      alt: 'Another view of the woodworking shop',
      title: '',
      description: 'Probably chiseled my fingers three times',
      type: 'woodshop',
    },
    {
      src: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/toolbox.JPEG',
      alt: 'toolbox',
      title: 'Toolbox',
      description: 'Made a somewhat functional toolbox :)',
      type: 'woodshop',
    },
  ];

  return (
    <div className="woodworking-section-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Lora:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');

          .font-inter { font-family: 'Inter', sans-serif; }
          .font-lora { font-family: 'Lora', serif; }
          .font-source-sans-pro { font-family: 'Source Sans Pro', sans-serif; }

          .woodworking-section-container {
            background-color: #E8DDCB;
            color: #4A4A4A;
            padding: 6rem 1.5rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            background-image: none;
          }

          .woodworking-section-container::before {
            content: none;
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 900px;
            padding: 0 1rem;
            position: relative;
            z-index: 1;
          }

          .section-title {
            font-size: 3.5rem;
            font-weight: 700;
            color: #6E260E;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: none;
          }


          .section-description {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #6E260E;
            font-family: 'Source Sans Pro', sans-serif;
            max-width: 700px;
            margin: 0 auto;
          }

          .image-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 1200px;
            width: 100%;
            padding: 0 1rem;
            position: relative;
            z-index: 1;
          }

          @media (min-width: 640px) {
            .image-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .image-grid {
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: auto;
            }
            .image-grid-item:nth-child(1) {
                grid-column: span 2;
            }
          }

          .image-grid-item {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
            position: relative;
            cursor: pointer;
            background-color: transparent;
            display: flex;
            flex-direction: column; /* Stack image and overlay */
          }

          .image-grid-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }
            
          .image-wrapper {
            position: relative;
            width: 100%;
            min-height: 400px;
            padding-bottom: 65%;
            overflow: hidden;
          }

          .woodworking-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease-out, filter 0.4s ease-out;
            filter: brightness(0.98);
          }

          .image-grid-item:hover .woodworking-image {
            transform: scale(1.02);
            filter: brightness(1);
          }

          .image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            color: #EADDCA;
            padding: 1.5rem;
            transform: translateY(0);
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            opacity: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .image-grid-item:hover .image-overlay {
            transform: translateY(100%);
            opacity: 0;
          }

          .image-title {
            font-family: 'Lora', serif;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: -0.01em;
          }

          .image-description {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 0.85rem;
            color: #EADDCA;
            line-height: 1.4;
            max-height: 4.2em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        `}
      </style>

      <header className="section-header">
        <h2 className="section-title font-lora">Woodworking</h2>
        <p className="section-description font-source-sans-pro">
            Took ART 443 at USC and learned how to use the table saw, radial arm saw, band saw, planer, jig saw, sander/grinder/buffer, chop saw, drill press, lathe, and chisel. 
        </p>
      </header>

      <div className="image-grid">
        {photos.map((photo, index) => (
          <div key={index} className="image-grid-item">
            <div className="image-wrapper">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={800}
                layout="responsive"
                objectFit="cover"
                className="woodworking-image"
              />
            </div>
            <div className="image-overlay">
              <h3 className="image-title font-lora">{photo.title}</h3>
              <p className="image-description font-source-sans-pro">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoodworkingSection;
