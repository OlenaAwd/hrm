import React, { useState } from "react";
import DOMPurify from "dompurify";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { accordionIconStyles } from "../../constants/styles/accordionIcon";
import { accordionStyles } from "../../constants/styles/accordion";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AccordionQuestions({ childrenArr }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const sanitizer = DOMPurify.sanitize;
  return (
    <div>
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
                <RemoveIcon sx={accordionIconStyles} />
              ) : (
                <AddOutlinedIcon sx={accordionIconStyles} />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              backgroundColor: "#F2F2F2",
              height: "66px",
              "@media (max-width: 475px)": {
                maxWidth: "390px",
              },
            }}
          >
            <Typography
              sx={{
                width: "420px",
                flexShrink: 0,
                color: "#083049",
                fontSize: "16px",
                "@media (max-width: 475px)": {
                  maxWidth: "355px",
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
              dangerouslySetInnerHTML={{ __html: sanitizer(item.description) }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
