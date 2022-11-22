import React, { useContext } from "react";
import { Button, TextField, Slider, Checkbox } from "@mui/material";
import { MultiStepContext } from "../StepContext";
import "../../src/App.css";
const SecondStep = () => {
  const { userData, setCurrentStep, currentStep, setUserData } =
    useContext(MultiStepContext);
  const marks = [
    {
      value: 0,
      label: "1 Lac",
    },
    {
      value: 20,
      label: "2 Lac",
    },
    {
      value: 37,
      label: "3Lac",
    },
    {
      value: 100,
      label: "5 Lac",
    },
  ];
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
      <div>Select Your Deduductable Amount</div>
      <div className="slider">
        <div>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
      </div>
      <Checkbox size="small" />
      <span>
        I understand that this insurance will not be utilized until ₹3,00,000
        (deductible) is exhausted.
      </span>

      <div className="btn-container">
        <div>
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
