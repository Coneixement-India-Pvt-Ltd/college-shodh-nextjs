"use client"
import React, { createContext, useState } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");


  return (
    <CollegeContext.Provider value={{ selectedCity, setSelectedCity, selectedCourse, setSelectedCourse }}>
      {children}
    </CollegeContext.Provider>
  );
};
