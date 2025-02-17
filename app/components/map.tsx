"use client";
import React, { useState } from 'react';

interface MapData {
  src: string;
  width: string;
  height: string;
  className: string;
}

const maps: MapData[] = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.9473111739592!2d67.04774932847882!3d25.00727639860883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzI2LjIiTiA2N8KwMDInNTQuMiJF!5e0!3m2!1sen!2s!4v1733580266391!5m2!1sen!2s",
    width: "250",
    height: "250",
    className:
      "rounded-3xl border-2 border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
  }
  // You can add more maps here
];

const MapEmbed: React.FC = () => {
  const [activeMap, setActiveMap] = useState<MapData>(maps[0]);

  return (
    <div className="container mx-auto p-8">
      {maps.length > 1 && (
        <div className="flex justify-center mb-6">
          {maps.map((map, index) => (
            <button
              key={index}
              onClick={() => setActiveMap(map)}
              className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Map {index + 1}
            </button>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <iframe
          src={activeMap.src}
          width={activeMap.width}
          height={activeMap.height}
          className={activeMap.className}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
