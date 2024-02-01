import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ChipComponent from "../Chip";
import {
  watchModalFilmStyles,
  watchModalStyles,
} from "../../constants/styles/watchModal";
import { modalVideoStyles } from "../../constants/styles/modalVideo";
import styles from "./ModalWatchVideo.module.scss";
import playIcon from "../../assets/playIcon.svg";

const ModalWatchVideo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {};
  const { pathname } = useLocation();

  return (
    <div>
      <ChipComponent
        label={"Watch the Film"}
        onClick={() => handleClickOpen()}
        onDelete={handleDelete}
        deleteIcon={
          <>
            <PlayCircleOutlineIcon
              sx={{ color: "#083049", width: "24px", height: "24px" }}
            />
          </>
        }
        sx={watchModalFilmStyles}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalVideoStyles}>
          {pathname === "/relocate/buy" && (
            <iframe
              src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=d4f05409-6377-4659-b2b4-36eb5fe93a7e&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
              frameborder="none"
              title="Retire Early"
              className={styles.videoStyles}
            ></iframe>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default ModalWatchVideo;
