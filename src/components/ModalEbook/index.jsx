import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./ModalEbook.module.scss";
import { modalEbookStyles } from "../../constants/styles/modalEbook";

const ModalEbook = ({
  btn,
  img,
  title,
  cost,
  description,
  header,
  children,
  span,
  type,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('type :>> ', type);
 console.log('header :>> ', header.includes("Download"));
  return (
    <div>
      <p onClick={handleOpen} className={styles.btn}>
        {btn}
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalEbookStyles}>
            <div className={styles.ebookCard}>
              <div className={styles.imgContainer}>
                <img src={img} alt="book" />
              </div>
              <div>
                <div className={styles.textContainer}>
                  <h6 className={styles.header}>{header}</h6>
                  <h5 className={styles.title}>{title}</h5>
                  <p className={styles.textCost}>{cost}</p>
                  <p className={`${cost?.includes("Included") && styles.textMembers} ${header?.includes("Download") && styles.textSmall} ${header?.includes("Buy") && styles.textBuySmall} ${styles.text}  ${title?.includes("Cheap") && styles.textRelocateSmall}`}>{description}</p>
                 
                  {type !== "Buy Now" && <span className={styles.span}>{span}</span>}
                </div>
                <div className={styles.emailContainer}>{children}
               
                </div>
              </div>
            </div>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: "5px",
                top: "5px",
                color: "#083049",
                "@media (max-width:630px)": {
                  right: "2px",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalEbook;
