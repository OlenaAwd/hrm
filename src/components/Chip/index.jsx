import React from "react";
import Chip from "@mui/material/Chip";

const ChipComponent = ({ label, onClick, sx, deleteIcon, onDelete }) => (
  <Chip
    label={label}
    variant="outlined"
    onClick={onClick}
    onDelete={onDelete}
    sx={sx}
    deleteIcon={deleteIcon}
  />
);

export default ChipComponent;
