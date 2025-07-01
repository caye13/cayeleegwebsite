'use client';
import React from 'react';

const Image = ({ src, alt, width, height, layout, objectFit, className }) => {
  const style = {};
  if (layout === 'responsive' || layout === 'fill') {
    style.objectFit = objectFit;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={(e) => {
        e.target.src = `https://placehold.co/${width}x${height}/444444/FFFFFF?text=Image+Unavailable`;
        e.target.onerror = null;
      }}
      className={className}
      style={style}
    />
  );
};

const BandEvents = () => {
  const events = [
    {
      title: 'HS Grad Party',
      date: 'May 28, 2023',
      address: '', 
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/hsgp.jpg',
    },
    {
      title: 'PI Bar Birthday Party',
      date: 'February 17, 2022',
      address: '1432 VALENCIA ST, SAN FRANCISCO, CA',
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/pb.JPEG',
    },
    {
      title: 'Valencia Art Corridor',
      date: 'April 23, 2022',
      address: 'Valencia St and 16th St',
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/IMG_8529.jpg',
    },
    {
      title: 'Halloween Showcase at The New Farm',
      date: 'October 30, 2021',
      address: '10 CARGO WAY, SAN FRANCISCO, CA',
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/hsc.JPG',
    },
    {
      title: 'Tribute to Jim Morrison',
      date: 'August 20, 2021',
      address: '10 cargo way, san francisco, ca',
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/ttjm.jpg',
    },
    {
      title: 'San Francisco Rock Project Online Showcase',
      date: 'June, 2020',
      address: 'Online',
    },
    {
      title: 'Festive Festival of Bands at Twitter Headquarters',
      date: 'December 15, 2019',
      address: '1355 Market St, San Francisco, CA',
      poster: 'https://raw.githubusercontent.com/caye13/my-website-photos/main/ffob.jpg',
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen py-16 px-4">
      <h1 className="text-5xl uppercase text-center text-white mb-12 tracking-wider">
        Past Gigs
      </h1>

      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <div className="event-content">
              <h4 className="uppercase event-title">{event.title}</h4>
              <h5 className="uppercase event-date">{event.date}</h5>
              <h4 className="uppercase event-address">
                {event.address || 'Location: Invite Only'}
              </h4>
            </div>
            {event.poster && (
              <div className="event-poster-wrapper">
                {/* next/image requires width and height props, and optionally 'layout' or 'fill' */}
                <Image
                  src={event.poster}
                  alt={`${event.title} poster`}
                  width={500} 
                  height={300} 
                  layout="responsive" 
                  objectFit="contain" 
                  className="event-poster"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandEvents;
