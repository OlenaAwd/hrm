import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SelectComponent = ({ title, children }) => {
  const [page, setPage] = useState("");

  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <Select
      value={page}
      onChange={handleChange}
      displayEmpty
      IconComponent={ExpandMoreIcon}
      SelectDisplayProps={{ style: { paddingLeft: 0 } }}
      sx={{
        "& .MuiSvgIcon-root": {
          color: "#083049",
          width: "18px",
          height: "18px",
          marginTop: "3px",
        },
        boxShadow: "none",
        margin: "0",
        "&:hover": {
          fontWeight: 600,
        },

        "&.Mui-focused": {
          color: "#083049",
          border: "none",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },

        ".MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
    >
      <MenuItem value="" disabled>
        {title}
      </MenuItem>
      {children}
    </Select>
  );
};

export default SelectComponent;
