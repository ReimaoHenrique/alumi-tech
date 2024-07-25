// components/Carousel.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

type CarouselProps = {
  items: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-black bg-opacity-50 text-white p-2 z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "min-w-full transition-opacity duration-500",
                {
                  "opacity-100": index === currentIndex,
                  "opacity-0": index !== currentIndex,
                }
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-black bg-opacity-50 text-white p-2 z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
