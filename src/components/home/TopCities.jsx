"use client"
import { CollegeContext } from "@/context/CollegContext";
import Link from "next/link";
import React, { useContext, useState } from "react";


const TopCities = () => {
  const [startIndex, setStartIndex] = useState(0);
  const citiesPerPage = 5;

  const {selectedCity, setSelectedCity, selectedCourse, setSelectedCourse} = useContext(CollegeContext)

  const handleNext = () => {
    if (startIndex + citiesPerPage < cities.length) {
      setStartIndex(startIndex + citiesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - citiesPerPage >= 0) {
      setStartIndex(startIndex - citiesPerPage);
    }
  };


  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };


  const cities = [
    { name: "Kolkata", img: "./cities/kolkata.png" },
    { name: "Pune", img: "./cities/pune.JPG" },
    { name: "Bangalore", img: "./cities/banglore.png" },
    { name: "Mumbai", img: "./cities/mumbai.png" },
    { name: "Jaipur", img: "./cities/jaipur.png" },
    { name: "Gurgaon", img: "./cities/gurgaon.png" },
    { name: "Delhi", img: "./cities/delhi.png" },
    { name: "Chennai", img: "./cities/chennai.png" },
    { name: "Hyderabad", img: "./cities/hyderabad.png" },
    { name: "Ahmedabad", img: "./cities/ahmedabad.png" },
  ];

  return (
    <div>
      <div className="text-left ml-32 mt-8">
        <p className="font-bold text-xl">Top Cities</p>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`arrow-button ${startIndex === 0 ? "disabled" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="mb-8 mt-8 flex flex-wrap justify-center gap-4">
          {cities
            .slice(startIndex, startIndex + citiesPerPage)
            .map((city, index) => (
              <Link href={`/colleges?city=${city.name}`} key={index}>
                <button
                  onClick={() => handleCityClick(city.name)}
                 className="h-28 w-44 border border-black rounded-lg flex flex-col items-center justify-center">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="h-16 rounded-lg"
                  />
                  <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                    {city.name}
                  </span>
                </button>
              </Link>
            ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + citiesPerPage >= cities.length}
          className={`arrow-button ${
            startIndex + citiesPerPage >= cities.length ? "disabled" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <hr />
    </div>
  );
};

export default TopCities;
