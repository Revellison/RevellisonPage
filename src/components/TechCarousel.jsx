import React from 'react';
import jsLogo from '../assets/tech/js.png';
import reactLogo from '../assets/tech/react.png';
import tailwindLogo from '../assets/tech/tailwind.png';
import viteLogo from '../assets/tech/vite.png';
import tsLogo from '../assets/tech/ts.png';

const logos = [jsLogo, reactLogo, tailwindLogo, viteLogo, tsLogo];

export default function TechCarousel() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-900">
      <div className="animate-slide flex gap-8">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="tech"
            className="h-12 w-auto inline-block"
          />
        ))}
      </div>
    </div>
  );
}
