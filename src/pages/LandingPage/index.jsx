import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import InstagramCard from "../../components/InstagramCard";
import Footer from "../../components/Footer";
import ListingSlider from "../../components/ListingSlider";
import RelocationCard from "../../components/RelocationCard";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import LearnMoreComponent from "../../components/LearnMore";
import { InstagramCardMainData, listingImages } from "../../mockedData/data";
import { LoadingFallback } from "../../utils/loadingFallback";
import useSize from "../../hooks/useSize";
import styles from "./LandingPage.module.scss";
import logo from "../../assets/logo.svg";
import thinArrow from "../../assets/thinArrow.svg";
import benefitsImg from "../../assets/benefitsNew.webp";
import membersImg from "../../assets/memberCalculation.webp";






const LandingPage = ({ src, text, img }) => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/members");
  };

  const { width } = useSize();

  return (
    <>
     <Helmet>
      <title>Search Relocatable Houses: Find Your Dream Home with House Relocation</title>
      <meta name="description" content="Is house relocation the right choice for you? Explore the pros and cons of relocating houses and discover the latest house listings. Join our House Relocation Membership for expert coaching to save time and money on your relocation journey." />
      </Helmet>
      <Header />
      <main>
        <section className={`${width>389 ?styles.heroContainer : styles.heroContainerResponsive}`}>
          <h1 className={styles.heroTitle}>Search relocatable houses</h1>
          <SearchComponent />
        </section>
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h2 className={styles.sectionTitle}>
            Is House Relocation right for you?
          </h2>
          <p className={styles.sectionText}>
            Pros and Cons of House Relocation
          </p>
          <div className={styles.containerCard}>
            <RelocationCard img={img} src={src} text={text} />
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.listingsTitle}>Latest House listings</h2>
          <div className={styles.sliderContainer}>
            <ListingSlider
              children={listingImages.map((item) => (
                <div className={styles.sliderCard} key={item.src}>
                  <Suspense fallback={<LoadingFallback />}>
                    <img
                      src={item.src}
                      alt={item.src}
                      className={styles.sliderItem}
                    />
                  </Suspense>
                  <p className={styles.cardText}>{item.text}</p>
                  <LearnMoreComponent children="New Listings" />
                </div>
              ))}
            />
            <div className={styles.finalContainer} onClick={handleJoinNow}>
              <p className={styles.finalText}>
                Become a House Relocation Marketplace subscriber, $40 annual fee
                to begin messaging listings
              </p>
              <img src={thinArrow} alt="arrow" className={styles.thinArrow} />
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.benefitsTitle}>
            The benefits of House Relocation Membership
          </h2>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitsImage}>
              <Suspense fallback={<LoadingFallback />}>
                <img src={benefitsImg} alt="benefits" loading="lazy" />
              </Suspense>
            </div>
            <div className={styles.benefitsDescription}>
              <img
                className={styles.logoDescr}
                src={logo}
                alt="House Relocation"
              />
              <p className={styles.benefitsText}>
                Become a member and be coached step by step through the house
                relocation process. We guarantee it will save you time and make
                you money.
              </p>
              {/* <ModalEarlyBirdDiscount
              children={
                <div className={styles.btnContainer}>
                  <ButtonComponent classes={styles.benefitsBtn}>
                    Join Now
                  </ButtonComponent>
                </div>
              }
            /> */}
              <button className={styles.joinNowBtn} onClick={handleJoinNow}>
                Join Now
              </button>
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.marketPlaceTitle}>
            House Relocation Marketplace Member Calculator
          </h2>
          <p className={styles.marketPlaceText}>
            Unlock the power of the House Relocation Marketplace calculator and
            coaches to work out which Marketplace investment is right for you.
            This calculator is part of the paid coaching program.
          </p>
          {/* <LearnMoreComponent children="Learn More" /> */}
          <div className={styles.groupImageContainer}>
            <Suspense fallback={<LoadingFallback />}>
              <img
                src={membersImg}
                alt="members"
                className={styles.groupImage}
                loading="lazy"
              />
            </Suspense>
          </div>
        </section>
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h2 className={styles.reviewsTitle}>
            Instagram Reviews from House Relocation Marketplace Members
          </h2>
          <div className={styles.containerInstagramCard}>
            {InstagramCardMainData.map((card, index) => (
              <InstagramCard
                key={index}
                src={card.src}
                name={card.name}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
