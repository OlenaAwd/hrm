export const accordionSummaryStyles = {
  background: "#083049",
  height: "28px",
  borderTopRightRadius: "17px",
  borderTopLeftRadius: "17px",
  "@media (max-width: 550px)": {
    width: "400px",
  },
  "@media (max-width:430px)": {
    width: "360px",
  },
  "@media (max-width:380px)": {
    width: "340px",
  },
};

export const accordionSummaryInner = {
  height: "31px",
  // borderBottom: "0.5px solid #E6E6E6",
  backgroundColor: "#fff",
};

export const accordionSummaryInnerLast = {
  height: "31px",
  border: "0.5px solid #E6E6E6",
  // borderTop: "none",
  borderBottomLeftRadius: "17px",
  borderBottomRightRadius: "17px",
  backgroundColor: "#fff",
};
export const accordionSummaryInnerLastExpanded = {
  height: "31px",
  border: "0.5px solid #E6E6E6",
  borderBottom: "none",

  backgroundColor: "#fff",
};

export const titleAccordion = {
  width: "100%",
  flexShrink: 0,
  color: "#083049",
  fontWeight: 400,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "12px",
  lineHeight: "15px",
};
