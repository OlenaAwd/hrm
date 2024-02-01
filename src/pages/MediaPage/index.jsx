import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@mui/material";
import ButtonContactsGetStarted from "../../components/ButtonContactsGetStarted";
import ValuesCard from "../../components/ValuesCard";
import MediaCard from "../../components/MediaCard";
import ModalMediaReleases from "../../components/ModalMediaReleases";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { btnGreenSignUpStyles } from "../../constants/styles/btnGreenSignUp";
import {
  relocationFeatures,
  valuesCardData,
} from "../../mockedData/mediaCardData";
import useDebounce from "../../hooks/useDebounce";
import styles from "./Media.module.scss";
import firstImg from "../../assets/media/img1-min.webp";
import secondImg from "../../assets/media/man_media_page.png";
import thirdImg from "../../assets/media/img3-min.webp";
import fourthImg from "../../assets/media/img4-min.webp";
import mediaContentImg from "../../assets/media/mediaContent-min.webp";
import logo from "../../assets/logo.png";
import chart from "../../assets/media/Image-min.png";
import house from "../../assets/media/Image (1)-min.png";
import emailIcon from "../../assets/emailIcon.svg";
import ImageGetInTouch from "../../assets/ImageGetInTouch.png";
import materialsImg from "../../assets/media/materials-min.png";
import personImg from "../../assets/clientImgs/founder.webp";
import logo1 from "../../assets/logo-big.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import MediaKit from "../../assets/pdf/House Relocation Marketplace Media Pack.pdf";



const MediaPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEdit, setEdit] = useState(true);

  const handleChangeEmail = (e) => {
    const val = e.target.value;
    setEmailError("");
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError("Please, enter your email");
      return;
    }
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
      validateEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
    if (emailValue.length === 0) {
      setEmailError("Please, enter your email");
      return;
    }

    if (!checkEmail) {
      setEmailError("Email is not correct");
      return;
    }
    setEmailError("");
  };

  const isDisabled = !emailValue || !isEdit || !!emailError;

  return (
    <>
         <Helmet>
      <title>Welcome to House Relocation Marketplace - Empowering House Recyclers Worldwide</title>
      <meta name="description" content="Discover House Relocation Marketplace, the world's unique online platform empowering individuals to recycle and relocate houses with simplicity and profitability. Stay updated with the latest news and insights." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <h5 className={styles.sectionSubTitle}>
            Welcome to House Relocation Marketplace
          </h5>
          <h2 className={styles.sectionTitle}>
            Empowering the world to recycle houses
          </h2>
          <p className={styles.sectionText}>
            Launched in 2023, House Relocation Marketplace is the worlds only
            online house relocation marketplace. It is an education and
            community connection platform to teach and empower anyone to
            relocate a house anywhere in the world.
          </p>
          <div className={styles.galleryWrapper}>
            <div className={styles.first2Wrap}>
              <div className={styles.galleryContainerFirst}>
                <img src={firstImg} alt="house" className={styles.firstImg} />
              </div>
              <div className={styles.galleryContainerSecond}>
                <img
                  src={secondImg}
                  alt="person"
                  className={styles.secondImg}
                />
              </div>
            </div>
            <div className={styles.galleryContainerThird}>
              <img src={thirdImg} alt="house" className={styles.thirdImg} />
              <img src={fourthImg} alt="car" className={styles.fourthImg} />
            </div>
          </div>
        </section>
        <section className={`${styles.commonSection} ${styles.purpose}`}>
          <h3 className={styles.purposeTitle}>Our Purpose</h3>
          <p className={styles.purposeText}>
            House Relocation Marketplace empowers you, by making house
            relocation simple, profitable, and worry free.
          </p>
          <h3 className={styles.purposeTitle}>Our Values</h3>
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
        <section className={styles.commonSection}>
          <h3 className={styles.newsTitle}>News</h3>
          <p className={styles.newsText}>
            The latest news, announcements and learnings from House Relocation
            Marketplace.
          </p>
          <h4 className={styles.newsSubText}>Featured</h4>
          <div className={styles.contentWrapper}>
            <div className={styles.contentImgContainer}>
              <img
                src={mediaContentImg}
                alt="house"
                className={styles.contentImg}
              />
            </div>
            <div className={styles.contentProductContainer}>
              <div className={styles.contentProductCard}>
                <div className={styles.descriptionCard}>
                  <h6 className={styles.descriptionTitle}>News</h6>
                  <p className={styles.descriptionText}>
                    Is House Relocation Easy?
                  </p>
                </div>
                <div className={styles.productImgCard}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className={styles.contentProductCard}>
                <div className={styles.descriptionCard}>
                  <h6 className={styles.descriptionTitle}>News</h6>
                  <p className={styles.descriptionText}>
                    Relocating a House - Where to Start
                  </p>
                </div>
                <div className={styles.productImgCard}>
                  <img src={chart} alt="chart" className={styles.productImg} />
                </div>
              </div>
              <div className={styles.contentProductCard}>
                <div className={styles.descriptionCard}>
                  <h6 className={styles.descriptionTitle}>News</h6>
                  <p className={styles.descriptionText}>
                    Finding a House Relocation Company to Move your House
                  </p>
                </div>
                <div className={styles.productImgCard}>
                  <img src={house} alt="house" className={styles.productImg} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h3 className={styles.relocationTitle}>
            Australian Entrepreneur Creates World First House Relocation
            Marketplace
          </h3>
          <p className={styles.relocationText}>
            A Melbourne based entrepreneur has launched the world’s first
            dedicated house relocation marketplace and online training portal.
          </p>
          <div className={styles.relocationCardContainer}>
            {relocationFeatures.map((item, index) => (
              <MediaCard src={item.src} title={item.title} key={index} />
            ))}
          </div>
        </section>
        <section className={styles.stayUpdated}>
          <div className={styles.updatedInfo}>
            <img src={emailIcon} alt="email" className={styles.email} />
            <div className={styles.contentWrap}>
              <h6 className={styles.infoTitle}>Stay updated</h6>
              <p className={styles.infoText}>
                Get the latest House Relocation Marketplace announcements.
              </p>
            </div>
          </div>
          <div className={styles.updatedEmail}>
            <label className={styles.label}>Email address </label> <br />
            <div className={styles.emailInnerWrapper}>
              <input
                placeholder="Enter your email address"
                value={emailValue}
                onChange={handleChangeEmail}
                className={styles.emailInput}
              />

              <Button sx={btnGreenSignUpStyles} disabled={isDisabled}>
                Sign Up
              </Button>
            </div>
            <div className={styles.errorContainer}>
              <span className={styles.helperText}>{emailError}</span>
            </div>
            <p className={styles.receiveUpdates}>
              By submitting this form you agree to receive news updates from
              House Relocation Marketplace.
            </p>
          </div>
        </section>
        <section className={styles.getInTouch}>
          <div className={styles.enquiries}>
            <h4 className={styles.enquiriesTitle}>Media enquiries</h4>
            <p className={styles.enquiriesText}>
              For general media enquiries or media requests please get in touch
              at info@houserelocationmarketplace.com.au
            </p>

            <a
              href="mailto:info@houserelocationmarketplace.com.au"
              className={styles.btnGetInTouch}
            >
              Get in Touch
            </a>
          </div>
          <img src={ImageGetInTouch} alt="person" className={styles.imgTouch} />
        </section>
        <section className={styles.mediaKitSection}>
          <h3 className={styles.newsTitle}>Media Kit</h3>
          <p className={styles.newsText}>
            Everything you need to write about House Relocation Marketplace
          </p>
          <div className={styles.kitImgContainer}>
            <div className={styles.kitCardContainer}>
              <img
                src={materialsImg}
                alt="materials"
                className={styles.materialImg}
              />
              <div className={styles.kitContentWrapper}>
                <h6 className={styles.kitTitle}>Media Materials</h6>
                <p className={styles.kitDescription}>
                  <a href={MediaKit} download className={styles.linkDownload}>
                    Everything you need
                  </a>
                </p>
                <ModalMediaReleases />
              </div>
            </div>
            <div className={styles.kitCardContainer}>
              <img
                src={personImg}
                alt="person"
                className={styles.materialImg}
              />
              <div className={styles.kitContentWrapper}>
                <h6 className={styles.kitTitle}>Our Founder</h6>
                <p className={styles.kitDescription}>
                  Headshot and profile of our founder
                </p>
              </div>
            </div>
          </div>
          <h3 className={styles.newsTitle}>Brand Guidelines</h3>
          <p className={styles.newsText}>
            Learn how to showcase House Relocation Marketplace with the right
            logos and assets
          </p>
          <div className={styles.logoContainer}>
            <div className={styles.imgLogoContainer}>
              <img src={logo1} alt="logo" className={styles.logoImg} />
            </div>

            <div className={styles.imgLogoContainerBoth}>
              <div className={styles.imgLogoContainer}>
                <img src={logo2} alt="logo" className={styles.logoImg} />
              </div>
              <div className={styles.imgLogoContainer}>
                <img src={logo3} alt="logo" className={styles.logoImg} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h3 className={styles.newsTitle}>Contact Us</h3>
          <p className={styles.newsText}>
            Need something that’s not on this page? Check out these additional
            resources.
          </p>
          <div className={styles.contactsLogoContainer}>
            <div className={styles.contactsLogoCard}>
              <h5 className={styles.contactsLogoTitle}>Logo Usage</h5>
              <p className={styles.contactsLogoText}>
                Want to use the House Relocation Marketplace logo?
              </p>
              <div className={styles.btnContainer}>
                <ButtonContactsGetStarted children={"Get Started"} />
              </div>
            </div>
            <div className={styles.contactsLogoCard}>
              <h5 className={styles.contactsLogoTitle}>
                Marketplace Content Usage
              </h5>
              <p className={styles.contactsLogoText}>
                Want to cite or repurpose our content?
              </p>
              <div className={styles.btnContainer}>
                <ButtonContactsGetStarted children={"Get Started"} />
              </div>
            </div>
            <div className={styles.contactsLogoCard}>
              <h5 className={styles.contactsLogoTitle}>
                Be a Guest Contributor
              </h5>
              <p className={styles.contactsLogoText}>
                Want to contribute to the House Relocation Marketplace blogs and
                podcasts?
              </p>
              <div className={styles.btnContainer}>
                <ButtonContactsGetStarted children={"Get Started"} />
              </div>
            </div>
          </div>
          <p className={styles.contactsReachOutText}>
            Reach out to the House Relocation Marketplace communications team
          </p>
          <div className={styles.btnContainer}>
            <a type="email" href="mailto:info@houserelocationmarketplace.com" className={styles.contactsEmailTeam}>Email the team</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;
