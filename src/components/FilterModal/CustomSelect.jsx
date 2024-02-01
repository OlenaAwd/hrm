import * as React from 'react';
import Box from '@mui/material/Box';
import { Select, MenuItem } from '@mui/material';

export default function SelectComponent({ arr, onChange, value, header}) {
  return (
    <Box sx={{ minWidth: 70, marginBottom:"20px" }}>
      <p>{header}</p>
      <Select
          displayEmpty
          value={value}
          renderValue={(selected) => {
            if (selected?.length === 0 || selected?.length === null) {
              return <span>{header}</span>;
            }
            return selected;
          }}
          onChange={onChange}
        >
          <MenuItem disabled value="">
            <span>{header}</span>
          </MenuItem>
          {arr.map(item=>(
                     <MenuItem value={item.value}>{item.title}</MenuItem>
            ))}
         
        </Select>

    </Box>
  );
}