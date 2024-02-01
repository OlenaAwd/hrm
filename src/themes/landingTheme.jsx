import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({
  xs: 373,
  sm: 600,
  md: 930,
  lg: 1100,
  xl: 1536,
});

const landingDefaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "95px",
          height: "37px",
          borderRadius: "100px",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "17px",
          textTransform: "capitalize",
          background: "#083049",
          color: "#ffffff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#083049",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "17px",
          width: "100%",
          height: "17px",
          display: "flex",
          paddingTop: "2px !important",
          backgroundColor: "#fff",
          borderColor: "#083049",
          border: "none",
          "&.Mui-focused": {
            color: "#083049",
            borderColor: "#083049",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#083049",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#083049",
            },
          },
          legend: {
            display: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#083049",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "19px",
            backgroundColor: "#F3F5F7",
            color: "#747474",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          border: "1px solid #083049",
          color: "#083049",
          [breakpoints.down("lg")]: {
            width: 950,
          },
        },
      },
    },
    MuiTab:{
      styleOverrides: {
        root: {
          textTransform:'capitalize',
          color: "#083049",
          fontFamily: "Montserrat, sans-serif",
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '17px',
          width: '184px',
          maxWidth:"184px",
          height:"49px",
          padding:"16px",
          '&.Mui-selected': {
            color: "#083049",
            maxWidth:"184px",
            width: '184px',
        },
        "@media(max-width:860px)":{
          padding:"12px",
          width: '163px',
          maxWidth:"163px",
          height:"40px",
          '&.Mui-selected': {
            width: '163px',
            maxWidth:"163px",
        },
        }
        },
      },
    },
}
});

export default landingDefaultTheme;
