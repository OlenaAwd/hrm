import { Suspense, useState } from "react";
import ModalVersusVideo from "../ModalVersusVideo";
import { LoadingFallback } from "../../utils/loadingFallback";

import styles from "./WatchWebinarLast.module.scss";
import bgVideo from "../../assets/VideoMembersImg.png";
import { Box, Modal } from "@mui/material";
import { modalVideoStyles } from "../../constants/styles/modalVideo";
import PlayIcon from "../../assets/playIcon.svg";

const WatchWebinarLast = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.commonContainer}>
      <div className={styles.webinarContainer}>
        <img
          src={bgVideo}
          alt="free webinar"
          className={styles.webinarImg}
          onClick={() => handleClickOpen()}
        />
      </div>

      <div className={styles.wrapper}>
        <Suspense fallback={<LoadingFallback />}>
          <div>
            {/* <div className={styles.playContainer}>
              <img src={PlayIcon} alt="logo" />
            </div> */}
            <Modal open={open} onClose={handleClose}>
              <Box sx={modalVideoStyles}>
                <iframe
                  src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=c5087aab-153d-477b-b509-a43b3e5f8103&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  frameborder="0"
                  allowfullscreen
                  title="Retire Early"
                  className={styles.videoStyles}
                ></iframe>
              </Box>
            </Modal>
          </div>
          <ModalVersusVideo src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=bcbb723d-b846-4dc9-8f94-f81bbf70fd97&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create" />
        </Suspense>
      </div>
    </div>
  );
};

export default WatchWebinarLast;
