"use client"
import React, { useState } from "react";
import { CollegeContext } from "@/context/CollegContext";
import MyModal from "../Modals/Modal";
import Link from "next/link";
import { useContext } from "react";


const Options = [
  { text: "B.Arch", img: "./programs/barch.png",course: "Architecture", link: "#" },
  { text: "B.Pharm", img: "./programs/bphram.png", course: "Pharmacy", link: "#" },
  { text: "BCA", img: "./programs/bca.png", course: "BCA", link: "#", link: "#" },
  { text: "BE/B.Tech", img: "./programs/be-btech.png", course: "Engineering", link: "#" },
  { text: "B.Sc", img: "./programs/bsc.png", course: "Science", link: "#" },
];

const Programs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc
  const {selectedCity, setSelectedCity, selectedCourse, setSelectedCourse} = useContext(CollegeContext)

  const handleCityClick = (cityName) => {
    setSelectedCourse(cityName);
  };
  const closeModal = (e) => {
    setShowModal(false);    
    if (e.name){
      redirectCourse(e.name);
    }    
    e.stopPropagation();
  }


  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);    
  };

  const redirectCourse = (course) => {
    window.location.href = `/colleges?course=${course}`
  }


  return (
    <div className="text-center pb-8">
      <div>
        <p className="text-2xl font-system-ui p-4 mt-4 text-gray-800 bg-neutral-200">
          Discover Bachelor's Program in Science, Technology, Engineering and
          Mathematics
        </p>
      </div>

      <div className="text-left ml-32 mt-8">
        <p className="font-bold text-xl">Explore Programs</p>
      </div>

      <div className="mt-5 mb-5 flex flex-wrap justify-center gap-4">
        {Options.map((option, index) => (
          <Link  href={`/colleges`} key={index}>
            <button
              onClick={() => handleCityClick(option.course)}
              className="h-28 w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-slate-300 transition-all"
              
            >
              <img
                src={option.img}
                alt={option.text}
                className="h-14 rounded-lg"
              />
              <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                {option.text}
              </span>
            </button>
          </Link>
        ))}
      </div>
      <hr />
      {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
    </div>
  );
};

export default Programs;
