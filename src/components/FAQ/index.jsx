import React, { forwardRef, useState } from "react";
import DOMPurify from "dompurify";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { accordionStyles } from "../../constants/styles/accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import plus from "../../assets/plusGreenIcon.svg";
import minus from "../../assets/minusGreenIcon.svg";
import styles from "./FAQ.module.scss";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const FAQ = forwardRef(({ childrenArr, name }, ref) => {
  const sanitizer = DOMPurify.sanitize;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div ref={ref}>
      <h2 className={styles.titleSection}>{name}</h2>
      {childrenArr.map((item, index) => (
        <Accordion
          key={item.id}
          sx={accordionStyles}
          expanded={expanded === `${item.id}`}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={
              expanded === item.id ? (
                <img src={minus} alt="minus" />
              ) : (
                <img src={plus} alt="plus" />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              backgroundColor: "#fff",
              height: "66px",
              color: "#083049",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                flexShrink: 0,
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "25px",
                marginLeft: "10px",
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                  lineHeight: "22px",
                },
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "none" }}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "25px",
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                  lineHeight: "22px",
                },
              }}
              dangerouslySetInnerHTML={{ __html: sanitizer(item.description) }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
});
export default FAQ;
