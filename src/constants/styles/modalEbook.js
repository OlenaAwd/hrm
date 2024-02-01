export const modalEbookStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "880px",
  boxShadow: 24,
  padding: "24.5px 20px",
  display: "flex",
  background: "#fff",
  borderRadius: "12px",
  outline: "none",
  "@media (max-width:880px)": {
    width: 700,
  },
  "@media (max-width:700px)": {
    width: 550,
  },

  "@media (max-width:560px)": {
    width: 380,
  },
};
