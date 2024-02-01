import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ButtonBack from "../../components/ButtonBack";
import RelocateSlider from "../../components/RelocateSlider";
import CostsChart from "../../components/CostsChart";
import AccordionQuestions from "../../components/AccordionQuestions";
import { relocateImages } from "../../mockedData/data";
import {
  accordionBuyingData1,
  accordionBuyingData2,
} from "../../mockedData/accordionData";
import styles from "./RelocateBuyPage.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import Video from "../../assets/video/BuyCompare.mov";
import buyImg from "../../assets/BuyVideoCover.webp";


const RelocateBuyPage = () => {
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
      <title>Relocate a House vs. Buy Existing: Your Ultimate Guide | House Relocation Marketplace</title>
      <meta name="description" content="Discover the top 5 reasons to choose house relocation over buying an existing home. Jane and Phil share their experience, and explore the long-term costs of relocating versus buying. Join House Relocation Marketplace for in-depth guidance and meet expert mortgage brokers. Check out our FAQ on relocating vs. buying an existing house." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <ButtonBack
            children={<span>Back</span>}
            onClick={() => navigate(-1)}
          />
          <h2 className={styles.commonTitle}>
            Relocate a house versus buy existing house
          </h2>
          <p className={styles.sectionText}>
            Top 5 reasons to choose house relocation over buy existing
          </p>
        </section>
        <div className={styles.videoContainer}>
            {/* <video preload="auto"  src={Video} className={styles.videoStyles} controls></video> */}
            {isVideoPlaying ? (
        <video src={Video} controls autoPlay onPlay={handleVideoPlay} className={styles.videoStyles}/>
      ) : (
        <img className={styles.coverImg} src={buyImg} alt="Video Thumbnail" onClick={handleVideoPlay} />
      )}
        </div>
        <p className={styles.videoText}>
          Simone, Founder House Relocation Marketplace, talks the pros and cons
          of relocation versus buying.
        </p>
        <section className={styles.sectionExisting}>
          <h2 className={styles.commonSectionTitle}>
            Relocate a house versus buy existing – Jane and Phil
          </h2>
          <RelocateSlider
            children={relocateImages.map((item, index) => (
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
        <CostsChart title="Costs over 30 years relocating versus buying an existing house" />
        <MarketplaceAppComponent />
        <section className={styles.questionSection}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions, relocating versus buying an existing
            house
          </h2>
          <div className={styles.accordionContainer}>
            <AccordionQuestions childrenArr={accordionBuyingData1} />

            <AccordionQuestions childrenArr={accordionBuyingData2} />
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

export default RelocateBuyPage;
