export const mediaReleaseModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  background: "#fff",
  border: "0.5px solid #fefefe",
  borderRadius: "3px",
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  padding: "30px",
  "@media (max-width: 820px)": {
    width: 500,
  },
  "@media (max-width: 720px)": {
    width: 600,
  },
  "@media (max-width: 650px)": {
    width: 500,
  },
  "@media (max-width: 510px)": {
    width: 450,
  },
  "@media (max-width: 460px)": {
    width: 380,
  },
  "@media (max-width: 395px)": {
    width: 360,
  },
};
