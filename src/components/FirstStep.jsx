import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { MultiStepContext } from "../StepContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../src/App.css";
const schema = yup
  .object({
    firstName: yup.string().required(),
    mobile: yup.string().required(),
    address1: yup.string().required(),
    address2: yup.string().required(),
    pincode: yup.string().required(),
    state: yup.string().required(),
  })
  .required();

const FirstStep = () => {
  const { userData, setCurrentStep, currentStep, setUserData } =
    useContext(MultiStepContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setCurrentStep(2);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <TextField
            {...register("firstName")}
            id="outlined-basic"
            label="Personal Email Address"
            variant="outlined"
            value={userData["email"]}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <p className="alert-color">{errors.firstName?.message}</p>
        </div>
        <div>
          <TextField
            {...register("mobile")}
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            value={userData["mobile"]}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
          />
          <p className="alert-color">{errors.mobile?.message}</p>
        </div>
        <div>
          <TextField
            {...register("address1")}
            id="outlined-basic"
            label="Address line 01"
            variant="outlined"
            value={userData["address1"]}
            onChange={(e) =>
              setUserData({ ...userData, address1: e.target.value })
            }
          />
          <p className="alert-color">{errors.address1?.message}</p>
        </div>
        <div>
          <TextField
            {...register("address2")}
            id="outlined-basic"
            label="Address line 02"
            variant="outlined"
            value={userData["address2"]}
            onChange={(e) =>
              setUserData({ ...userData, address2: e.target.value })
            }
          />
          <p className="alert-color">{errors.address2?.message}</p>
        </div>
        <div>
          <TextField
            {...register("pincode")}
            id="outlined-basic"
            label="Pincode"
            variant="outlined"
            value={userData["pincode"]}
            onChange={(e) =>
              setUserData({ ...userData, pincode: e.target.value })
            }
          />
          <p className="alert-color">{errors.pincode?.message}</p>
        </div>
        <div>
          <TextField
            {...register("state")}
            id="outlined-basic"
            label="State"
            variant="outlined"
            value={userData["state"]}
            onChange={(e) =>
              setUserData({ ...userData, state: e.target.value })
            }
          />
          <p className="alert-color">{errors.state?.message}</p>
        </div>
        <div>
          <input name="Next" type="submit" />
        </div>
        {console.log(userData)}
      </div>
    </form>
  );
};

export default FirstStep;
