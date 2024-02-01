import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { modalVideoStyles } from "../../constants/styles/modalVideo";
import styles from "./ModalPodcastVideo.module.scss";
import PlayIcon from "../../assets/playIcon.svg";

const ModalPodcastVideo = ({ src }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.playContainer} onClick={() => handleClickOpen()}>
        <img src={PlayIcon} alt="logo" />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalVideoStyles}>
          <iframe
            src={src}
            frameBorder="0"
            allowFullScreen
            title="Retire Early"
            className={styles.videoStyles}
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalPodcastVideo;
