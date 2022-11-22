import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "./StepContext";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, finalData, userData, showData } =
    useContext(MultiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <DisplayData />;
    }
  };
  return (
    <>
      <div className="container">
        <h3>Form</h3>
        <div className="container1">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        {showData && (
          <div className="border">
            <h1>Preview form</h1>
            <div>Personal Email Address:{userData.email}</div>
            <div>Mobile Number:{userData.mobile}</div>
            <div>Address Line 01:{userData.address1}</div>
            <div>Address Line 02:{userData.address2}</div>
            <div>Pincode:{userData.pincode}</div>
            <div>State:{userData.state}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
