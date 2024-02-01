import React, { useRef, useState } from "react";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUsAccordion from "../../components/AccordionAboutUs";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import HelpfulLinksComponent from "../../components/HelpfulLinks";
import MultipleRowsSlider from "../../components/MultipleRowsSlider";
import ValuesCard from "../../components/ValuesCard";
import {
  MultipleRowAbout1,
  MultipleRowAbout2,
} from "../../mockedData/joinData";
import { valuesCardData } from "../../mockedData/mediaCardData";
import styles from "./About.module.scss";
import vision from "../../assets/vision-min.webp";
import listIcon from "../../assets/listIcon.svg";
import story from "../../assets/clientImgs/4New.webp";
import quote from "../../assets/quote.svg";
import circular from "../../assets/circularNew.webp";



const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRefVision = useRef(null);
  const sectionRefStory = useRef(null);
  const sectionRefServices = useRef(null);
  const sectionRefValues = useRef(null);
  const sectionRefCircularEconomy = useRef(null);
  const navigate=useNavigate();

  const sanitizer = DOMPurify.sanitize;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
      <title>About House Relocation Marketplace - Preserving Australia's Cultural Heritage</title>
      <meta name="description" content="Discover House Relocation Marketplace's vision for greener, more affordable homes and preserving cultural heritage. Learn how our founder's second chance inspired HRM. Explore our comprehensive services for successful house relocation." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.aboutSection} ref={sectionRefVision}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <div className={styles.commonContainer}>
            <div className={styles.visionContainer}>
              <p className={styles.span}>Our vision</p>
              <h4 className={styles.visionTitle}>
                Greener, more affordable homes, that preserve Australia’s
                cultural heritage
              </h4>
              <div className={styles.visionImgContainer}>
                <img src={vision} alt="vision" />
              </div>
            </div>
            <div className={styles.factsContainer}>
              <div className={styles.factsWrapper}>
                <p className={styles.spanFacts}>Fast facts</p>
                <span className={styles.spanGreen}>10k +</span>
                <p className={styles.description}>
                  The number of houses demolished per year, that could be
                  relocated.
                </p>
                <div className={styles.borderBottom}></div>
                <span className={styles.spanGreen}>20</span>{" "}
                <span className={styles.additionalGreen}>years</span>
                <p className={styles.description}>
                  The number of years cut from the average mortgage for
                  relocation versus build.
                </p>
                <div className={styles.borderBottom}></div>
                <span className={styles.spanGreen}>40k</span>{" "}
                <span className={styles.additionalGreen}>tonnes</span>
                <p className={styles.description}>
                  The amount of construction waste saved from landfill with
                  relocation
                </p>
                <div className={styles.borderBottom}></div>
                <span className={styles.spanGreen}>100k</span>{" "}
                <span className={styles.additionalGreen}>homes</span>
                <p className={styles.description}>
                  The potential number of that can be relocated through HRM in
                  the next 10 years
                </p>
                <div className={styles.borderBottom}></div>
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.resources}>
                  <img src={listIcon} alt="list" className={styles.listIcon} />
                  <p className={styles.resourcesTitle}>Helpful resources</p>
                  <HelpfulLinksComponent children={"Getting started guides"} onClick={() => {
                  navigate("/resources");
                  setTimeout(() => {
                    const contactSection = document.getElementById(
                      "registeredUser",
                    );
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }
                  }, 100);
                }}
              ></HelpfulLinksComponent>
                  <HelpfulLinksComponent children={"Success stores"} onClick={()=>navigate("/resources/success-stories")}/>
                  <HelpfulLinksComponent
                    children={
                      <a
                        href="mailto:info@houserelocationmarketplace.com.au"
                        style={{ color: "white" }}
                      >
                        Contact Us
                      </a>
                    }
                  />
                </div>
                <AboutUsAccordion
                  visionTitle="Our Vision"
                  onClickVision={() => scrollToSection(sectionRefVision)}
                  storyTitle="Our Story"
                  onClickStory={() => scrollToSection(sectionRefStory)}
                  servicesTitle="Our Services"
                  onClickServices={() => scrollToSection(sectionRefServices)}
                  valuesTitle="Our Values"
                  onClickValues={() => scrollToSection(sectionRefValues)}
                  circularTitle="Circular Economy"
                  onClickCircular={() =>
                    scrollToSection(sectionRefCircularEconomy)
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutSection} ref={sectionRefStory}>
          <p className={styles.span}>Our story</p>
          <h2 className={styles.sectionTitle}>
            Hear how HRM founder, Simone’s Ferrier’s second chance, became the
            inspiration for House Relocation Marketplace.
          </h2>
          <div className={styles.wrapperContainer}>
            <div className={styles.storyContainer}>
              <img src={story} alt="story" />
            </div>
            <div className={styles.textContainer}>
              <img src={quote} alt="quote" />
              <p>
                Our home ownership plans turned to dust when health issues
                halved our household income.
                <br />
                <br /> House Relocation and my own willingness to be resourceful
                and take a risk, turned our ship around.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.aboutSection} ref={sectionRefServices}>
          <p className={styles.span}>Our services</p>
          <div className={styles.wrapperServices}>
            <h2 className={styles.servicesTitle}>
              Everything you will ever need for a successful house relocation
            </h2>
            <p className={styles.servicesText}>
              Our end-to-end services give you the coaching, know how, tools,
              resources, discounts and partnerships for house relocation
              success.
            </p>
          </div>

          <MultipleRowsSlider
            children={MultipleRowAbout1.map((item, index) => (
              <div
                className={styles.sliderCard}
                key={item.src}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.src}
                  alt={item.src}
                  className={styles.sliderItem}
                />
                <div
                  className={`${
                    isHovered === false
                      ? styles.cardTextHoverHide
                      : styles.cardTextHoverShow
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(item.hoverText),
                    }}
                  />
                </div>
              </div>
            ))}
            childrenSecond={MultipleRowAbout2.map((item, index) => (
              <div
                className={styles.sliderCard}
                key={item.src}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.src}
                  alt={item.src}
                  className={styles.sliderItem}
                />
                <div
                  className={`${
                    isHovered === false
                      ? styles.cardTextHoverHide
                      : styles.cardTextHoverShow
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(item.hoverText),
                    }}
                  />
                </div>
              </div>
            ))}
          />
        </section>
        <section className={styles.aboutSection}>
          <h3 className={styles.purposeTitle}>Our Purpose</h3>
          <p className={styles.purposeText}>
            House Relocation Marketplace empowers you, by making house
            relocation simple, profitable, and worry free.
          </p>
          <h3 className={styles.purposeTitle} ref={sectionRefValues}>
            Our Values
          </h3>
          <div className={styles.valuesWrapper}>
            {valuesCardData.map((item) => (
              <ValuesCard
                key={item.description}
                src={item.src}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </section>
        <MarketplaceAppComponent />
        <section
          className={styles.aboutSection}
          ref={sectionRefCircularEconomy}
        >
          <p className={styles.span}>Circular Economy</p>
          <h2 className={styles.circularTitle}>
            Use resources wisely, through HRM, to sustain the environment and
            our cultural heritage
          </h2>
          <div className={styles.circularImgContainer}>
            <img src={circular} alt="circular" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
