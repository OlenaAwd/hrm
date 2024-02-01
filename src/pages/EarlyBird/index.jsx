import { Helmet } from "react-helmet-async";
import SliderImages from "../../components/SliderImages";
import ModalJoinWebinar from "../../components/ModalJoinWebinar";
import ModalEarlyBirdDiscount from "../../components/ModalEarlyBirdDiscount";
import ListingCard from "../../components/ListingCard";
import StepSlider from "../../components/StepSlider";
import InstagramSlider from "../../components/InstagramSlider";
import InstagramCard from "../../components/InstagramCard";
import LogoCardsSlider from "../../components/LogoCardsSlider";
import FbReviewCard from "../../components/FbReviewCard";
import YouGet from "../../components/YouGet";
import YouOrder from "../../components/YouOrder";
import FAQ from "../../components/FAQ";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";

import {
  PeopleReviewData,
  accordionJoin,
  accordionJoin2,
  chips,
  joinSliderSteps,
  listingData,
  whatYouGetList2,
} from "../../mockedData/mockedData";
import { InstagramMemberData } from "../../mockedData/data";

import styles from "./EarlyBird.module.scss";
// import story from "../../assets/story-min.png";
import story from "../../assets/clientImgs/2.png";
import quote from "../../assets/quote.svg";
import ebookImg from "../../assets/ebook-min.png";
import phoneImg from "../../assets/phones-join-min.webp";


const EarlyBird = () => {
  return (
    <>
     <Helmet>
      <title>Sustainable and Affordable House Relocation - Save Up to $600,000 with House Relocation Marketplace</title>
      <meta name="description" content="Discover the sustainable and cost-effective way to own a home. Find over 300 relocatable houses and save up to $600,000 through House Relocation Marketplace." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <h2 className={styles.commonTitle}>
            Sustainable. Affordable. House Relocation.
          </h2>
          <div className={styles.commonWrapper}>
            <div className={styles.sliderContainer}>
              <SliderImages />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.commonTitle}>
                Over 300 Relocatable Houses to choose from
              </h2>
              <p className={styles.averageHomeText}>
                save up to $600,000 on the average home*
              </p>
              <p className={styles.saveText}>
                Join House Relocation Marketplace to save hundreds of thousands
                of dollars by relocating an existing house to your land.
              </p>
              <div className={styles.btnWrapper}>
                <ModalJoinWebinar btnText="Sign Up for Webinar" />
                <ModalEarlyBirdDiscount
                  children={
                    <div className={styles.joinBtnContainer}>
                      <button className={styles.joinMembershipBtn}>
                        Get Early Bird Discounts
                      </button>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.listingTitle}>
            Search our listings of 300 relocatable homes
          </h2>
          <p className={styles.listingText}>
            House Relocation Marketplace has Australia’s largest list of
            relocatable homes.
          </p>
          <div className={styles.cardWrapper}>
            {listingData.map((item, index) => (
              <ListingCard
                key={index}
                src={item.src}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h2 className={`${styles.listingTitle} ${styles.listingTitleMargin}`}>
            What is House Relocation marketplace?
          </h2>
          <p className={`${styles.listingText} ${styles.listingTextMargin}`}>
            Everything you need for House Relocation success at your fingertips.
          </p>
          <div className={styles.commonContainerForJoin}>
            <div className={styles.storyContainer}>
              <img src={story} alt="story" />
            </div>
            <div className={styles.textContainerModal}>
              <img src={quote} alt="quote" />
              <p>
                “Join the sustainable housing revolution, taking home
                affordability to a new level. <br />
                <br />
                Start today with our free webinar”
              </p>
            </div>
            <ModalJoinWebinar
              btnText="Join Free Webinar"
              classes={styles.storyBtn}
            />
          </div>

          <div className={styles.bricksContainer}>
            <div className={`${styles.commonBrick} ${styles.brick1}`}>
              <p className={styles.bricksText}>
                Membership to master House Relocation
              </p>
            </div>
            <div className={`${styles.commonBrick} ${styles.brick2}`}>
              <p className={styles.bricksText}>Choose from over 300 houses</p>
            </div>
            <div className={`${styles.commonBrick} ${styles.brick3}`}>
              <p>Houses starting from $0.00*</p>
            </div>
          </div>

          <h2 className={styles.marketplaceTitle}>
            Sign up for our free webinar and receive our 4 free e-books to kick
            start your House Relocation Mastery
          </h2>
          <div className={styles.marketplaceImgContainer}>
            <img src={ebookImg} alt="ebook" className={styles.marketplaceImg} />
          </div>
          <h3 className={styles.marketplaceSubTitle}>
            Get started today on house relocation mastery with our FREE EBOOKS
          </h3>
          <div className={styles.containerBtn}>
            <ModalJoinWebinar btnText="Sign Up for Webinar" />
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.membersTitle}>Members share their success</h2>
          <div className={styles.containerInstagramSlider}>
            <InstagramSlider
              children={InstagramMemberData.map((card, index) => (
                <InstagramCard
                  key={index}
                  src={card.src}
                  name={card.name}
                  title={card.title}
                  description={card.description}
                />
              ))}
            />
          </div>
        </section>
        <section className={styles.commonSection}>
          <div className={styles.containerStepSlider}>
            <h2 className={styles.stepsTitle}>
              Membership provides a step-by-step program to take you from
              beginner to House Relocation Master
            </h2>
            <p className={styles.stepsSubTitle}>HRM’s 11 steps for success.</p>
            <StepSlider
              children={joinSliderSteps.map((item, index) => (
                <div className={styles.sliderCardStep} key={index}>
                  <img
                    src={item.src}
                    alt={item.src}
                    className={styles.sliderItem}
                  />

                  <p className={styles.textContainer}>{item.text}</p>
                </div>
              ))}
            />
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.reasonsTitle}>
            There are so many reasons to choose House Relocation Marketplace
            Membership
          </h2>
          <p className={styles.stepsSubTitle}>
            The top reasons people became HRM members.
          </p>
          <div className={styles.chipsContainer}>
            {chips.map((item) => (
              <p className={styles.chip} key={item.label}>
                {item.label}
              </p>
            ))}
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.joinTitle}>
            Sign up to the House Relocation Marketplace today and save
          </h2>
          <p className={styles.joinText}>
            Save $1,000 on HRM membership when you sign up for the app.
          </p>
          <p className={styles.joinText}>
            Start your relocation journey today to get all the benefits of
            membership and your choice of over 300 properties.
          </p>
          <div className={styles.relocationContainer}>
            <div className={styles.relocationImgContainer}>
              <img src={phoneImg} alt="phone" />
            </div>
            <div className={styles.relocationContentContainer}>
              <p className={styles.relocationContentText}>
                All the resources for House Relocation success at your finger
                tips.
              </p>
              <h6 className={styles.relocationContentSubTitle}>
                In the App store from September 2023
              </h6>
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.listingTitle}>
            The discounts that can 600x ROI your membership
          </h2>
          <p className={styles.listingSecondText}>
            You can expect to save up to $600,000 on the average $1,500,000
            home. You can learn how to relocate houses for as little as
            $100,000.
          </p>
          <div className={styles.containerLogoSlider}>
            <LogoCardsSlider />
          </div>
        </section>
        <section className={`${styles.commonSection} `}>
          <h2 className={styles.runMemberTitle}>
            What people are saying on the House Relocation Facebook Group
          </h2>
          <div className={styles.containerInstagramMembersCard}>
            {PeopleReviewData.map((card, index) => (
              <FbReviewCard
                key={index}
                src={card.src}
                name={card.name}
                title={card.title}
              />
            ))}
          </div>
        </section>
        <YouGet
          title={
            <h2 className={styles.runMemberAdditionalTitle}>
              Become a member of House Relocation Marketplace to start your
              journey today
            </h2>
          }
          childrenArr={whatYouGetList2}
        />
        <YouOrder />
        <section className={styles.commonSection}>
          <h2 className={styles.runMemberTitle}>Frequently Asked Questions</h2>
          <div className={styles.accordionContainer}>
            <div className={styles.accordionContainerUpper}>
              <FAQ
                childrenArr={accordionJoin}
                name="Membership for Home Owners"
              />
            </div>
            <div>
              <FAQ
                childrenArr={accordionJoin2}
                name="Membership for Real Estate Agents and Developers"
              />
            </div>
          </div>
        </section>
        <YouGet
          title={
            <h2 className={styles.runMemberAdditionalTitle}>
              Become a member of House Relocation Marketplace to start your
              journey today
            </h2>
          }
          childrenArr={whatYouGetList2}
        />
      </main>
      <Footer />
    </>
  );
};

export default EarlyBird;
