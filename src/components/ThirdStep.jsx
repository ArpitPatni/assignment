import React, { useContext } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { MultiStepContext } from "../StepContext";
import "../../src/App.css";

const ThirdStep = () => {
  const { userData, setCurrentStep, currentStep, setShowData } =
    useContext(MultiStepContext);
  return (
    <>
      <h1>Decleration</h1>
      <div>
        <Checkbox size="small" />
        <span>
          I hereby declare that none of the proposed members are habitual
          consumers of alcohol, tobacco, gutka or any recreational drugs.
        </span>
      </div>
      <div>
        <Checkbox size="small" />
        <span>
          I hereby declare that all proposed members are in good health and
          entirely free from any mental pf physical impairements or deformities,
          disease/condition.
        </span>
      </div>
      <div>
        <Checkbox size="small" />
        <span>
          I have understood that there is 30 days waiting period for all
          diseases and 2 years on named ailments. (list of named ailements)
        </span>
      </div>
      <div>
        <Checkbox size="small" />
        <span>
          I understand that this policy doesn't cover Pre-existing diseases.
        </span>
      </div>
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
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setShowData(false);
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
