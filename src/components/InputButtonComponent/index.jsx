import { Button, InputBase } from "@mui/material";
import React from "react";
import { subscribeBtnStyles } from "../../constants/styles/subscribeBtn";
import { inputStyles } from "../../constants/styles/input";

const InputButtonComponent = ({ buttonTitle, classes, btnStyles }) => {
  return (
    <div className={`${classes && classes}`}>
      <InputBase placeholder="Email Address*" sx={inputStyles} />
      <Button sx={`${subscribeBtnStyles} ${btnStyles && btnStyles}`}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export default InputButtonComponent;
