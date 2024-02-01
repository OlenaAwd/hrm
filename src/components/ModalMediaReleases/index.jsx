import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mediaReleaseModalStyles } from "../../constants/styles/mediaReleaseModal";
import { downloadableLinksData } from "../../mockedData/downloadableLinks";
import styles from "./ModalTerms.module.scss";

const ModalMediaReleases = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p onClick={handleOpen} className={styles.kitDescription}>
        Media Releases
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
          <Box sx={mediaReleaseModalStyles}>
            {downloadableLinksData.map((item) => (
              <a
                href={item.href}
                download
                className={styles.linkDownload}
                key={item.id}
              >
                {item.title}
              </a>
            ))}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: "5px",
                top: "5px",
                color: "navy",
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
export default ModalMediaReleases;
