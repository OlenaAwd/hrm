import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Checkbox, Chip } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LearnMoreComponent from "../../components/LearnMore";
import EditorsCard from "../../components/EditorsCard";
import BlogCard from "../../components/BlogCard";
import ModalJoinWebinar from "../../components/ModalJoinWebinar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import useDebounce from "../../hooks/useDebounce";
import {
  newsCardData,
  podcastCardData,
  successCardData,
} from "../../mockedData/blogDataCards";
import { chipBlogStyles } from "../../constants/styles/chipBlog";
import { checkboxStyles } from "../../constants/styles/checkbox";
import styles from "./ResourcesPage.module.scss";
import ebookImg from "../../assets/ebook-min.png";
import postBlogImg from "../../assets/postBlogContent-min.png";
import bgWebImg from "../../assets/bg-webinar-min.png";



const ResourcesPage = () => {
  const [checkedIndustry, setCheckedIndustry] = useState(false);
  const [checkedReport, setCheckedReport] = useState(false);
  const [checkedAgree, setCheckedAgree] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEdit, setEdit] = useState(true);

  let navigate = useNavigate();

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

  const handleChangeIndustry = (event) => {
    setCheckedIndustry(event.target.checked);
  };

  const handleChangeReport = (event) => {
    setCheckedReport(event.target.checked);
  };
  const handleChangeAgree = (event) => {
    setCheckedAgree(event.target.checked);
  };
  let check = false;
  if (checkedIndustry === true || checkedReport === true) {
    check = true;
  }

  const isDisabled =
    (!checkedAgree && check === false) ||
    check === false ||
    !checkedAgree ||
    !emailValue ||
    !isEdit ||
    !!emailError;

  const isDisabledLong = !emailValue || !isEdit || !!emailError;

  return (
    <>
      <Helmet>
      <title>House Relocation Marketplace Resources - Stay Informed & Inspired</title>
      <meta name="description" content="Explore House Relocation Marketplace's latest posts, achievements, and community success stories. Join our free 'Getting started in House Relocation' seminar. Don't miss our live webinars. Access editor's picks for the latest insights and more." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <h2 className={styles.sectionTitle}>
            House Relocation Marketplace Resources
          </h2>
          <p className={styles.sectionText}>
            Keep up to date with House Relocation Marketplace. Hear about the
            achievements of our motivated house relocation community. Get expert
            insights and advice. Learn how to execute a successful house
            relocation and hear our members inspiring success stories.
          </p>
          <div className={styles.chipContainer}>
            <Chip
              label="News"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => {
                navigate("/resources/news");
                window.scrollTo(0, 0);
              }}
            />
            <Chip
              label="Success Stories"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => {
                navigate("/resources/success-stories");
                window.scrollTo(0, 0);
              }}
            />
            <Chip
              label="Podcasts"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => {
                navigate("/resources/podcasts");
                window.scrollTo(0, 0);
              }}
            />
            <Chip
              label="E-books"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => {
                navigate("/resources/ebooks");
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </section>
        <section className={styles.webinarSection}>
          <div className={styles.titleContainer}>
            <h2 className={`${styles.sectionTitle} ${styles.responsiveTitle}`}>
              Most Recent Posts
            </h2>
            <LearnMoreComponent children={<span>View All Posts</span>} />
          </div>
          <div className={styles.containerBackground}>
            <div className={styles.newsImgWrapper}>
              <img src={postBlogImg} alt="content" />
            </div>
            <div className={styles.newsContainer}>
              {podcastCardData.slice(0, 2).map((item) => (
                <BlogCard
                  src={item.src}
                  section={item.section}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </div>
          </div>
          <div className={styles.wrapperWeb}>
            <div className={styles.containerWebinar}>
              <h3 className={styles.containerWebinarTitle}>
                Free “Getting started in House Relocation” Seminar
              </h3>
              <p className={styles.containerWebinarSubTitle}>
                Sign up for our next live webinar
              </p>

              <ModalJoinWebinar btnText="Sign Up Now" />
            </div>
            <img src={bgWebImg} alt="img" className={styles.webinarImg} />
          </div>
        </section>
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h3 className={styles.editorsTitle}>Editor’s Picks</h3>
          <div className={styles.editorsCardWrapper}>
            <div className={styles.editorsCardContainer}>
              <EditorsCard />
            </div>
            <div className={styles.editorsContent}>
              <h3 className={styles.editorsTitleContent}>
                Get our best content delivered to your inbox
              </h3>
              <div className={styles.checkboxWrapper}>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={checkboxStyles}
                  checked={checkedReport}
                  onChange={handleChangeReport}
                />
                <div>
                  <h5 className={styles.checkboxTitle}>
                    The House Relocation Report
                  </h5>
                  <p className={styles.checkboxText}>
                    For the house relocation obsessed
                  </p>
                </div>
              </div>
              <div className={styles.checkboxWrapper}>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={checkboxStyles}
                  checked={checkedIndustry}
                  onChange={handleChangeIndustry}
                />
                <div>
                  <h5 className={styles.checkboxTitle}>
                    House Relocation Industry Insights
                  </h5>
                  <p className={styles.checkboxText}>
                    For industry and real estate agents growing their business
                  </p>
                </div>
              </div>
              <div className={styles.inputWrapperShort}>
                <input
                  placeholder="Email Address*"
                  type="email"
                  className={styles.input}
                  value={emailValue}
                  onChange={handleChangeEmail}
                />
                <span className={styles.helperText}>{emailError}</span>
                <button className={styles.btnSubscribe} disabled={isDisabled}>
                  Subscribe
                </button>
              </div>
              <div className={styles.checkboxWrapper}>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={checkboxStyles}
                  checked={checkedAgree}
                  onChange={handleChangeAgree}
                />
                <div>
                  <p className={styles.checkboxText}>
                    I agree to receive content from House Relocation
                    Marketplace.
                  </p>
                </div>
              </div>
              <p className={styles.privacyText}>
                Your privacy matters! House Relocation Marketplace only uses
                this info to send content and updates. You may unsubscribe
                anytime. View our{" "}
                <span className={styles.privacyLink}>
                  <span onClick={() => navigate("/privacy-policy")}>
                    privacy policy
                  </span>
                </span>{" "}
                for more.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.commonSection} ${styles.static}`}>
          <h2 className={styles.postsTitle}>Discover the latest in...</h2>
          <div className={styles.sectionWrapper}>
            <div className={styles.titleBlogContainer}>
              <h2 className={styles.sectionSubTitle}>News</h2>
              <LearnMoreComponent children={<span>View More Posts</span>} />
            </div>
            <div className={styles.newsWrapper}>
              {newsCardData.map((item) => (
                <BlogCard
                  key={item.title}
                  src={item.src}
                  section={item.section}
                  title={item.title}
                  // onClick={() => {
                  //   navigate("/resources/news");
                  //   window.scrollTo(0, 0);
                  // }}
                />
              ))}
            </div>
          </div>
          <div className={styles.sectionWrapper}>
            <div className={styles.titleBlogContainer}>
              <h2 className={styles.sectionSubTitle}>Success Stories</h2>
              <LearnMoreComponent children={<span>View More Posts</span>} />
            </div>
            <div className={styles.newsWrapper}>
              {successCardData.map((item) => (
                <BlogCard
                  src={item.src}
                  section={item.section}
                  title={item.title}
                  key={item.title}
                  // onClick={() => {
                  //   navigate("/resources/success-stories");
                  //   window.scrollTo(0, 0);
                  // }}
                />
              ))}
            </div>
          </div>
          <div className={styles.sectionWrapper}>
            <div className={styles.titleBlogContainer}>
              <h2 className={styles.sectionSubTitle}>Podcasts</h2>
              <LearnMoreComponent children={<span>View More Posts</span>} />
            </div>
            <div className={styles.newsWrapper}>
              {podcastCardData
                .filter((item) => item.id !== 1)
                .map((item) => (
                  <BlogCard
                    src={item.src}
                    section={item.section}
                    title={item.title}
                    key={item.title}
                    // onClick={() => {
                    //   navigate("/resources/podcasts");
                    //   window.scrollTo(0, 0);
                    // }}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className={styles.commonSection} id="registeredUser">
          <h2 className={styles.marketplaceTitle}>
            Become a House Relocation Marketplace registered user to read
            download our series of free e-books
          </h2>
          <div className={styles.marketplaceImgContainer}>
            <img src={ebookImg} alt="ebook" className={styles.marketplaceImg} />
          </div>
          <div className={styles.inputWrapperLong}>
            <input
              placeholder="Enter you email"
              type="email"
              className={styles.inputLong}
              value={emailValue}
              onChange={handleChangeEmail}
            />
            <span className={styles.helperTextLong}>{emailError}</span>
            <button className={styles.btnSubmit} disabled={isDisabledLong}>
              Submit
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesPage;
