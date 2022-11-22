import React, { createContext, useState } from "react";
import App from "./App";

export const MultiStepContext = createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [showData, setShowData] = useState(true);
  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    console.log("Check", finalData);
    setUserData("");
    setCurrentStep(1);
  };
  return (
    <div>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
          showData,
          setShowData,
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
