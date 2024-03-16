"use client";

import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);

    return () => clearInterval(slideInterval);
  }, [current, interval]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className='relative flex justify-center items-center h-128 w-full'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={image} alt={`Imagen del carrusel ${index}`} className='w-full h-full object-cover' />
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-2 z-10 text-white">Anterior</button>
      <button onClick={nextSlide} className="absolute right-2 z-10 text-white">Siguiente</button>
    </div>
  );
};

export default ImageCarousel;