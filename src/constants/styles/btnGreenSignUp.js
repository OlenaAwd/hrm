export const btnGreenSignUpStyles = {
  background: "#64B930",
  width: "75px",
  borderRadius: "4px",
  marginLeft: "15px", // marginTop: "15px",
  height: "43px",
  fontWeight: 700,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "12px",
  lineHeight: "19px",

  "&:hover": {
    background: "#5a9535",
  },
  "&:disabled": {
    color: "#fff",
  },
  "@media (max-width: 1150px)": {
    width: "400px",
  },
  "@media (max-width: 500px)": {
    width: "300px",
  },
};
