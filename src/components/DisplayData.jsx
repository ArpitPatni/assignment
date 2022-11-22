import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

const DisplayData = () => {
  const { userData } = useContext(MultiStepContext);
  return (
    <div>
      <div className="border">
        <h1>Congratulations</h1>
        <div>Personal Email Address:{userData.email}</div>
        <div>Mobile Number:{userData.mobile}</div>
        <div>Address Line 01:{userData.address1}</div>
        <div>Address Line 02:{userData.address2}</div>
        <div>Pincode:{userData.pincode}</div>
        <div>State:{userData.state}</div>
      </div>
    </div>
  );
};

export default DisplayData;
