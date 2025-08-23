"use client";
import React, { useState, useEffect, useRef } from 'react';
import '../styles/photospage.css';
import Image from 'next/image';

const PhotoGallery = () => {
    const photos = [
        { id: 1, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/ggbnight.jpeg", title: "Golden Gate Bridge", location: "San Francisco, CA", date: "January, 2024", description: "Evening walk to Fort Point with Dad" },
        { id: 2, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/winterYosemite.JPG", title: "Yosemite Falls", location: "Yosemite Valley, CA", date: "April, 2014", description: "From Ahwahnee Hotel to Lower Yosemite Falls Trail" },
        { id: 3, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/alaska.JPG", title: "Ice Caps", location: "Anchorage, Alaska", date: "August, 2013", description: "Where the heart is" },
        // { id: 5, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/mtTam.jpeg", title: "Mount Tam", location: "Stinson Beach, CA", date: "July, 2024", description: "Mountain Tamalpais" },
        { id: 4, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/glaciers.JPG", title: "Glaciers", location: "Glacier Bay National Park, Alaska", date: "August, 2013", description: "Sightseeing glaciers + ice caps day" },
        { id: 6, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/sausalito.jpeg", title: "View of SF", location: "Sausalito, CA", date: "July, 2023", description: "Outside of Spinnaker with Quinn" },
        { id: 7, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/Monterey-7745.jpg", title: "Sunset", location: "Monterey, CA", date: "December, 2013", description: "Grandparents' Anniversary" },
        { id: 8, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/sb.jpeg", title: "Old Mission Santa Barbara", location: "Santa Barbara, CA", date: "July, 2022", description: "" },
        { id: 9, src: "https://raw.githubusercontent.com/caye13/my-website-photos/main/blueAngels.jpg", title: "Hornets", location: "Fleet Week", date: "July, 2022", description: "Flight demonstration of the F-18s in Blue Angel uniform" },
    ];

    const [flippedCards, setFlippedCards] = useState({});
    const [cardDimensions, setCardDimensions] = useState({});
    const cardRefs = useRef([]); 
    const imageRefs = useRef([]);

    const maxWidth = 600;
    const maxHeight = 450;

    const handleCardClick = (id) => {
        setFlippedCards(prevState => ({
            ...prevState,
            [id]: !prevState[id] 
        }));
    };

    // Calculate card dimensions based on image
    const calculateCardDimensions = (naturalWidth, naturalHeight) => {
        if (!naturalWidth || !naturalHeight) return { width: 400, height: 300 };

        const aspectRatio = naturalWidth / naturalHeight;
        let cardWidth, cardHeight;

        if (aspectRatio > 1) {
            // Horizontal image - constrain by width
            cardWidth = Math.min(naturalWidth, maxWidth);
            cardHeight = cardWidth / aspectRatio;

            // If height exceeds max, constrain by height instead
            if (cardHeight > maxHeight) {
                cardHeight = maxHeight;
                cardWidth = cardHeight * aspectRatio;
            }
        } else {
            // Vertical image - constrain by height
            cardHeight = Math.min(naturalHeight, maxHeight);
            cardWidth = cardHeight * aspectRatio;

            // If width exceeds max, constrain by width instead
            if (cardWidth > maxWidth) {
                cardWidth = maxWidth;
                cardHeight = cardWidth / aspectRatio;
            }
        }

        return { width: Math.round(cardWidth), height: Math.round(cardHeight) };
    };

    // Handle image load
    const handleImageLoad = (photoId, index, event) => {
        const img = event.target;
        const dimensions = calculateCardDimensions(img.naturalWidth, img.naturalHeight);
        
        setCardDimensions(prev => ({
            ...prev,
            [photoId]: dimensions
        }));

        // Apply the dimensions to the card
        if (cardRefs.current[index]) {
            cardRefs.current[index].style.width = `${dimensions.width}px`;
            cardRefs.current[index].style.height = `${dimensions.height}px`;
        }
    };

    // Handle image error
    const handleImageError = (photoId, index) => {
        console.warn(`Failed to load image for photo ID ${photoId}`);
        const defaultDimensions = { width: 400, height: 300 };
        
        setCardDimensions(prev => ({
            ...prev,
            [photoId]: defaultDimensions
        }));

        // Apply default dimensions to the card
        if (cardRefs.current[index]) {
            cardRefs.current[index].style.width = `${defaultDimensions.width}px`;
            cardRefs.current[index].style.height = `${defaultDimensions.height}px`;
        }
    };

    useEffect(() => {
        // Apply random translateY offset to cards
        cardRefs.current.forEach(card => {
            if (card) {
                const offset = Math.random() * 80 - 40; 
                const currentTransform = card.style.transform || '';
                // Preserve existing transform and add translateY
                card.style.transform = `${currentTransform} translateY(${offset}px)`.trim();
            }
        });

        // Check if images are already loaded and set dimensions
        imageRefs.current.forEach((img, index) => {
            if (img && img.complete && img.naturalWidth > 0) {
                const photo = photos[index];
                if (photo) {
                    handleImageLoad(photo.id, index, { target: img });
                }
            }
        });
    }, []); 

    return (
        <div className="photo-gallery">
            {photos.map((photo, index) => {
                const dimensions = cardDimensions[photo.id];
                
                return (
                    <div
                        key={photo.id}
                        className={`photo-card rounded-xl ${flippedCards[photo.id] ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(photo.id)}
                        ref={el => cardRefs.current[index] = el}
                        style={{
                            width: dimensions ? `${dimensions.width}px` : '400px',
                            height: dimensions ? `${dimensions.height}px` : '300px'
                        }}
                    >
                        <div className="photo-card-inner">
                            <div className="photo-front">
                                {/* <img 
                                    ref={el => imageRefs.current[index] = el}
                                    src={photo.src} 
                                    alt={photo.title}
                                    onLoad={(e) => handleImageLoad(photo.id, index, e)}
                                    onError={() => handleImageError(photo.id, index)}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                /> */}
                                <Image
                                    ref={el => imageRefs.current[index] = el}
                                    src={photo.src}
                                    alt={photo.title}
                                    onLoad={(e) => handleImageLoad(photo.id, index, e)}
                                    onError={() => handleImageError(photo.id, index)}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="photo-back">
                                <h3>{photo.title}</h3>
                                <p>{photo.date}</p>
                                <p>Taken in {photo.location}.</p>
                                <p>{photo.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PhotoGallery;