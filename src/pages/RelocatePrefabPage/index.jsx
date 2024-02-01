import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import RelocateSlider from "../../components/RelocateSlider";
import CostsChart from "../../components/CostsChart";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import AccordionQuestions from "../../components/AccordionQuestions";
import { relocateImagesPrefab } from "../../mockedData/data";
import {accordionPrefabData1,  accordionPrefabData2} from "../../mockedData/accordionData";
import styles from "./RelocatePrefabPage.module.scss";
import Video from "../../assets/video/PrefrabCompare.mov";
import buyImg from "../../assets/PrefabVideoCover.webp";


const RelocatePrefabPage = () => {
  let navigate = useNavigate();
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  
  const handleVideoPlay = () => {
    setVideoPlaying(true);
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = false;
      video.play().catch(error => {
        // Handle autoplay error, e.g., user interaction required
      });
    }
  }, []);

  return (
    <>
     <Helmet>
      <title>Relocate a House vs. Buying Prefabricated: Your Complete Guide | House Relocation Marketplace</title>
      <meta name="description" content="Discover the top 5 reasons to opt for house relocation over buying a prefabricated house. Angie's insights, along with a 30-year cost comparison between relocating and prefabricated homes. Join House Relocation Marketplace for comprehensive guidance and connect with expert mortgage brokers. Explore our FAQ on relocating vs. buying a prefabricated house." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <ButtonBack
            children={<span>Back</span>}
            onClick={() => navigate(-1)}
          />
          <h2 className={styles.commonTitle}>
            Relocate a house versus buying a prefabricated house
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
            Relocate a house versus pre-fab – Angie
          </h2>
          <RelocateSlider
            children={relocateImagesPrefab.map((item, index) => (
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
        <CostsChart title="Costs over 30 years relocating versus buying prefabricated story" />
        <MarketplaceAppComponent />
        <section className={styles.questionSection}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions, relocating versus buying a prefabricated
            house
          </h2>
          <div className={styles.accordionContainer}>
            <AccordionQuestions childrenArr={accordionPrefabData1} />

            <AccordionQuestions childrenArr={accordionPrefabData2} />
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

export default RelocatePrefabPage;
