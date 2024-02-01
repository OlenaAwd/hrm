import { Suspense, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { LoadingFallback } from "../../utils/loadingFallback";
import { modalVideoStyles } from "../../constants/styles/modalVideo";

import styles from "./WatchWebinar.module.scss";
import bgVideo from "../../assets/RelocateVerBuyVideo.png";
import bgVideoBuild from "../../assets/RelocateVerBuildVideo.png";
import bgVideoPrefab from "../../assets/RelocateVerPrefabVideo.png";
import bgVideoMembers from "../../assets/VideoMembersImg.png";

const WatchWebinar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const iframeRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);

    // Autoplay the iframe when modal is opened
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.commonContainer}>
      <iframe
        src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=be3edbe8-6ed9-451e-83b0-55dfa6445c2d&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create?autoplay=1"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Build Compare changes round 2.mp4"
        className={styles.videoStyles}
        ref={iframeRef}
      ></iframe>
      {/* {pathname === "/members" && (
        <div className={styles.webinarContainer}>
          <img
            src={bgVideoMembers}
            alt="free webinar"
            className={styles.webinarImg}
            onClick={() => handleClickOpen()}
          />
        </div>
      )}
      {pathname === "/relocate/buy" && (
        <div className={styles.webinarContainerRelocate}>
          <img
            src={bgVideo}
            alt="free webinar"
            className={styles.webinarImg}
            onClick={() => handleClickOpen()}
          />
        </div>
      )} */}
      {/* {pathname === "/relocate/build" && (
        <div className={styles.webinarContainerRelocate}>
          <img
            src={bgVideoBuild}
            alt="free webinar"
            className={styles.webinarImg}
            onClick={() => handleClickOpen()}
          />
        </div>
      )} */}
      {/* {pathname === "/relocate/prefab" && (
        <div className={styles.webinarContainerRelocate}>
          <img
            src={bgVideoPrefab}
            alt="free webinar"
            className={styles.webinarImg}
            onClick={() => handleClickOpen()}
          />
        </div>
      )} */}

      {pathname !== "/members" && (
        <p className={styles.webinarText}>
          Simone, Founder House Relocation Marketplace, talks the pros and cons
          of relocation versus buying.
        </p>
      )}

      <div className={styles.wrapper}>
        <Suspense fallback={<LoadingFallback />}>
          {pathname === "/relocate/buy" && (
            <div>
              <Modal open={open} onClose={handleClose}>
                <Box sx={modalVideoStyles}>
                  <iframe
                    src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=d4f05409-6377-4659-b2b4-36eb5fe93a7e&embed=%7B%22af%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                    frameborder="0"
                    allowfullscreen
                    title="Buy Compare Round 2.mp4"
                    className={styles.videoStyles}
                  ></iframe>
                </Box>
              </Modal>
            </div>
          )}
          {pathname === "/relocate/build" && open && (
            <div>
              <Modal open={open} onClose={handleClose}>
                <Box sx={modalVideoStyles}>
                  {/* <iframe
                   
                    frameborder="0"
                    allowfullscreen
                    title="Retire Early"
                    className={styles.videoStyles}
                  ></iframe> */}
                  <iframe
                    src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=be3edbe8-6ed9-451e-83b0-55dfa6445c2d&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create?autoplay=1"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    title="Build Compare changes round 2.mp4"
                    className={styles.videoStyles}
                    ref={iframeRef}
                  ></iframe>
                </Box>
              </Modal>
            </div>
          )}

          {pathname === "/relocate/prefab" && (
            <div>
              <Modal open={open} onClose={handleClose}>
                <Box sx={modalVideoStyles}>
                  <iframe
                    src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=5e4544ab-4ac7-4aad-b0fd-de6cdcec95a1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                    frameborder="0"
                    allowfullscreen
                    title="Retire Early"
                    className={styles.videoStyles}
                  ></iframe>
                </Box>
              </Modal>
            </div>
          )}
          {pathname === "/members" && (
            <div>
              <Modal open={open} onClose={handleClose}>
                <Box sx={modalVideoStyles}>
                  <iframe
                    src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=be3edbe8-6ed9-451e-83b0-55dfa6445c2d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                    frameborder="0"
                    allowfullscreen
                    title="Retire Early"
                    className={styles.videoStyles}
                  ></iframe>
                </Box>
              </Modal>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default WatchWebinar;
