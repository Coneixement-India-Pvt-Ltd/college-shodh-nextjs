// context/CollegeContext.jsx
"use client";
import { createContext, useState, useContext } from 'react';

const CollegeContext = createContext();

export function CollegeProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const values = {
    selectedCity,
    setSelectedCity,
    selectedCourse,
    setSelectedCourse,
    selectedState,
    setSelectedState,
  };

  return (
    <CollegeContext.Provider value={values}>
      {children}
    </CollegeContext.Provider>
  );
}

export function useCollegeContext() {
  return useContext(CollegeContext);
} 
