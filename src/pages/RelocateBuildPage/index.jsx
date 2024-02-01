import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ButtonBack from "../../components/ButtonBack";
import RelocateSlider from "../../components/RelocateSlider";
import CostsChart from "../../components/CostsChart";
import AccordionQuestions from "../../components/AccordionQuestions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import { relocateImagesBuild } from "../../mockedData/data";
import {accordionBuildingData1, accordionBuildingData2} from "../../mockedData/accordionData";
import styles from "./RelocateBuildPage.module.scss";
import Video from "../../assets/video/BuildCompare.mov";
import buyImg from "../../assets/BuildVideoCover.webp";

const RelocateBuildPage = () => {
  let navigate = useNavigate();
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  
  const handleVideoPlay = () => {
    setVideoPlaying(true);
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(error => {
      });
    }
  }, []);

  return (
    <>
      <Helmet>
      <title>Relocate a House vs. Building New: Your Ultimate Guide | House Relocation Marketplace</title>
      <meta name="description" content="Explore the top 5 reasons to choose house relocation over building a new home. Mark's insights, and a 30-year cost comparison between relocating and new builds. Join House Relocation Marketplace for comprehensive guidance and connect with expert mortgage brokers. Dive into our FAQ on relocating vs. building a new home." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <ButtonBack
            children={<span>Back</span>}
            onClick={() => navigate(-1)}
          />
          <h2 className={styles.commonTitle}>
            Relocate a house versus building a new home
          </h2>
          <p className={styles.sectionText}>
            Top 5 reasons to choose house relocation over build
          </p>
        </section>
        <div className={styles.videoContainer}>
        {isVideoPlaying ? (
        <video src={Video} controls autoPlay onPlay={handleVideoPlay} className={styles.videoStyles}/>
      ) : (
        <img className={styles.coverImg} src={buyImg} alt="Video Thumbnail" onClick={handleVideoPlay} />
      )}
          {/* <video preload="auto" src={Video} className={styles.videoStyles} controls></video> */}
        </div>

        <section className={styles.sectionExisting}>
          <h2 className={styles.commonSectionTitle}>
            Relocate a house versus building – Mark
          </h2>
          <RelocateSlider
            children={relocateImagesBuild.map((item, index) => (
              <div className={styles.wrapperCard} key={index}>
                <div className={styles.sliderCard} key={item.src}>
                  <img
                    src={item.src}
                    alt={item.src}
                    className={styles.sliderItem}
                  />
                  <div className={styles.cardBody}>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          />
        </section>
        <CostsChart title="Costs over 30 years relocating versus building a new home" />
        <MarketplaceAppComponent />
        <section className={styles.questionSection}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions, relocating versus building a new home
          </h2>
          <div className={styles.accordionContainer}>
            <AccordionQuestions childrenArr={accordionBuildingData1} />

            <AccordionQuestions childrenArr={accordionBuildingData2} />
          </div>
          <p className={styles.accordionText}>
            We offer support over email, and the best way to contact us is
            through the in-app help menu.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RelocateBuildPage;
