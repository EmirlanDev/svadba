"use client";

import { useState } from "react";
import Image from "next/image";

interface SliderProps {
  images: string[]; // массив путей к картинкам
}

export default function SliderClient({ images }: SliderProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-[500px]">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`slide-${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Стрелки */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-white w-[35px] h-[35px] flex justify-center items-center text-gray-800 rounded-full"
      >
        <div className="border-t-[2px] border-l-[2px] rotate-[-45deg] mr-[-5px] w-[15px] h-[15px]"></div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-white w-[35px] h-[35px] flex justify-center items-center text-gray-800 p-2 rounded-full"
      >
        <div className="border-t-[2px] border-l-[2px] rotate-[135deg] ml-[-5px] w-[15px] h-[15px]"></div>
      </button>

      {/* Точки */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
