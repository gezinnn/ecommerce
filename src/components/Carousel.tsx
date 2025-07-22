/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

const images = [
  "https://static-cdn.jtvnw.net/jtv_user_pictures/f8fece47-1c71-4d08-abbd-9bfd1cba7701-profile_banner-480.png",
  "https://static-cdn.jtvnw.net/jtv_user_pictures/7acde7c1-ecbd-4003-b1cd-c87743b7c746-channel_offline_image-1920x1080.jpeg",
  "https://i.ytimg.com/vi/71dy7_dC-g0/maxresdefault.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[98%] h-[500px] m-5 border rounded-2xl overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
