"use client";
import React from "react";
import Button from "@mui/material/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding, FaPhoneAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function CollegeCard({ college }) {
  return (
    <div
      id="college-card"
      key={college._id}
      className="border border-gray-300 rounded-lg p-4 mb-2 lg:w-[70%] w-full mx-auto hover:shadow-2xl transition-shadow"
    >
      <h1 className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">
        {college.college_name}
      </h1>

      <div className="flex flex-wrap">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <p className="text-sm text-gray-600 mb-4 flex items-center">
            <FaRegBuilding className="text-orange-500 text-lg mr-2" />
            <b>Dept: {college.dept}</b>
          </p>
          <p className="text-sm text-gray-600 mb-4 flex items-center">
            <PiStudentFill className="text-orange-500 text-lg mr-2" />
            Student Intake: {college.intake}
          </p>
          <div className="text-sm text-gray-600 mb-4 flex items-center">
            <IoNewspaperOutline className="text-orange-500 text-lg mr-2" />
            Admission Criteria: <span className="ml-1">{college.admission_criteria}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-2">
          {/* NIRF Rank */}
          <div className="flex items-center space-x-2">
            <img
              src="https://static.wixstatic.com/media/5e1aab_e511d9d14fb34d4da47f1e9eda71cf69~mv2.png/v1/fill/w_1360,h_378,al_c/NIRF.png"
              alt="NIRF Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-gray-600">
              <b>{college.nirf}</b>
            </span>
          </div>
          {/* NBA */}
          <div className="flex items-center space-x-4">
            <img
              src="https://www.tapmi.edu.in/wp-content/uploads/2016/02/nba-logo-300x103.png"
              alt="NBA Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-gray-600">
              <b>{college.nba}</b>
            </span>
          </div>
          {/* NAAC */}
          <div className="flex items-center space-x-4">
            <img
              src="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png?ssl=1"
              alt="NAAC Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-gray-600">
              <b>A++</b> {college.naac}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2 border-gray-300" />

      {/* Contact Section and Button */}
      <div className="flex flex-wrap items-center justify-between">
        {/* Contact Section */}
        <div className="flex flex-wrap items-center space-x-4 mb-4 lg:mb-0">
          <div className="relative group">
            <FaPhoneAlt className="text-orange-400 text-lg cursor-pointer" />
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {college.contact}
            </div>
          </div>
          <div className="h-6 border-l border-gray-400 hidden lg:block"></div>
          <div className="relative group">
            <MdEmail className="text-orange-400 text-lg cursor-pointer" />
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {college.email}
            </div>
          </div>
          <div className="h-6 border-l border-gray-400 hidden lg:block"></div>
          <div className="flex items-center">
            <IoLocationOutline className="text-orange-400 text-lg mr-2" />
            <span className="text-sm text-gray-600 italic">{college.address}</span>
          </div>
        </div>

        {/* Button */}
        <Link href={college.website} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            className="text-blue-800 bg-blue-100 py-2 px-4 w-full sm:w-auto"
          >
            Know more
          </Button>
        </Link>
      </div>
    </div>
  );
}
