import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import MultipleRowsSlider from "../../components/MultipleRowsSlider";
import StepSlider from "../../components/StepSlider";
import InstagramCard from "../../components/InstagramCard";
import CoachCard from "../../components/CoachCard";
import SuccessSlider from "../../components/SuccessSlider";
import SuccessCard from "../../components/SuccessCard";
import SuccessCardSmall from "../../components/SuccessCardSmall";
import YouOrder from "../../components/YouOrder";
import FAQ from "../../components/FAQ";
import FbReviewCard from "../../components/FbReviewCard";
import YouGet from "../../components/YouGet";
import MemberCards from "../../components/MemberCards";
import ModalEarlyBirdDiscount from "../../components/ModalEarlyBirdDiscount";
import MarketplaceAppComponent from "../../components/MarketplaceAppComponent";
import BenefitsCard from "../../components/BenefitsCard";
import InstagramMemberCard from "../../components/InstagramMemberCard";
import InstagramSlider4Cards from "../../components/InstagramSlider4Cards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  InstagramCardMemberPageData,
  InstagramCardMemberPageNewData,
} from "../../mockedData/data";
import {
  InstagramCardJoinData,
  MultipleRow1,
  MultipleRow2,
  chips,
  coachingCardData,
  joinSliderStep2,
  successCardData,
  successCardData2,
  whatYouGetList2,
} from "../../mockedData/joinData";
import { accordionJoin, accordionJoin2 } from "../../mockedData/mockedData";
import { joinSliderSteps, PeopleReviewData } from "../../mockedData/mockedData";
import styles from "./MembersPage.module.scss";
import phoneImg from "../../assets/phones-join-min.webp";
import exclusiveLeft from "../../assets/exclusive1-min.webp";
import exclusiveTop from "../../assets/exclusiveTop.webp";
import exclusiveRight from "../../assets/exclusive2-min.webp";
import exclusiveBottom from "../../assets/exclusiveBottom.webp";
import computerImg from "../../assets/computer-min.webp";
import stepMember1 from "../../assets/runMember1-min.webp";
import stepMember2 from "../../assets/runMember2-min.webp";
import stepMember3 from "../../assets/runMember3-min.webp";
import stepMember4 from "../../assets/runMember4-min.webp";
import hrmImg from "../../assets/hrmImg-min.webp";
import membersImg from "../../assets/memberCalculation.webp";
import poweredImg from "../../assets/poweredImg.webp";
import logo7Days from "../../assets/logo7Days.png";
import learnIcon from "../../assets/learnIcon.svg";
import growthIcon from "../../assets/growthIcon.svg";
import LogoCardMembers from "../../components/LogoCardMembers";
import Video from "../../assets/video/upgradeMembershape.mov";
import buyImg from "../../assets/MemberVideoCover.webp";

const MembersPage = () => {
  // const sectionRef = useRef(null);
  const realEstateQuestionRef = useRef(null);
  const developersQuestionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  
  const handleVideoPlay = () => {
    setVideoPlaying(true);
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const sanitizer = DOMPurify.sanitize;

  return (
    <>
      <Helmet>
      <title>Unlock the Benefits of House Relocation Marketplace Membership</title>
      <meta name="description" content="Explore the value-packed benefits and services of House Relocation Marketplace Membership. Learn from experts, save on education, and connect with a thriving community of house relocation enthusiasts." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <h2 className={styles.commonTitle}>
            House Relocation Marketplace Membership
          </h2>
          <p className={styles.sectionText}>
            Everything you will ever need for a successful house relocation
          </p>
          <div className={styles.subContainer}>
            <p className={styles.subText}>
              Our end-to-end services give you the coaching, know how, tools,
              resources, discounts and partnerships for house relocation
              success.
            </p>
            <p className={styles.subText}>
              Hear our members react to House Relocation Marketplace Membership.
            </p>
          </div>
          {/* <WatchWebinar /> */}
          <div className={styles.videoContainer}>
          <iframe 
          src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=bcbb723d-b846-4dc9-8f94-f81bbf70fd97&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
           frameborder="0"
            title="Members react to HRM.mp4"
            className={styles.videoStyles}></iframe>

          </div>
          <ModalEarlyBirdDiscount
            children={
              <div className={styles.memberBtnContainer}>
                <button className={styles.memberBtn}>
                  Become a Member Now
                </button>
              </div>
            }
          />
        </section>
        <section className={styles.commonSection}>
          <div className={styles.benefitsServicesContent}>
            <h2 className={styles.commonTitle}>
              Value packed member benefits and services
            </h2>
            <p className={styles.benefitsServicesText}>
              House Relocation Marketplace Membership gives you access to the
              very best experts of house relocation.
            </p>
            <p className={styles.benefitsServicesText}>
              You’ll save big on your house relocation education. You’ll
              discover transformational tools, techniques, tips and ideas not
              yet covered in mainstream learning. And you’ll connect with the
              world’s best house relocation teachers, experts and our community.
              All on one revolutionary online learning platform.
            </p>
          </div>
          <MultipleRowsSlider
            children={MultipleRow1.map((item, index) => (
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
            childrenSecond={MultipleRow2.map((item, index) => (
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
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h2 className={styles.membersTitle}>Members share their success</h2>
          <div className={styles.containerInstagramSlider}>
            <InstagramSlider4Cards
              children={InstagramCardMemberPageNewData.map((card, index) => (
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
          <div className={styles.relocationContainer}>
            <div className={styles.relocationImgContainer}>
              <img src={phoneImg} alt="phone" />
            </div>
            <div className={styles.relocationContentContainer}>
              <h4 className={styles.relocationContentTitle}>
                Work through your House Relocation goals
              </h4>
              <h6 className={styles.relocationContentSubTitle}>
                Use the HRM needs assestment to create a more personalised and
                effective coaching program
              </h6>
              <p className={styles.relocationContentText}>
                You can customise your training and coaching to meet your
                individual needs.
              </p>
              <p className={styles.relocationContentText}>
                Work through your house relocation goals and work needs
                assessment with a HRM coach create a more personalised and
                effective program.
              </p>
            </div>
          </div>
        </section>
        <MarketplaceAppComponent />
        <section className={styles.commonSection}>
          <h2 className={styles.coachingTitle}>
            Member coaching sessions from leaders in the field of House
            Relocation
          </h2>
          <p className={styles.stepsSubTitle}>
            Meet the experts behind House Relocation Marketplace
          </p>
          <div className={styles.containerCardsCoach}>
            {coachingCardData.map((item, index) => (
              <CoachCard
                key={index}
                src={item.src}
                name={item.name}
                position={item.position}
              />
            ))}
          </div>
        </section>
        <section className={styles.exclusiveSection}>
          <div className={styles.exclusiveWrapper}>
            <div className={styles.exclusiveImg}>
              <img
                src={exclusiveLeft}
                alt="exclusiveLeft"
                className={styles.check}
              />

              <img
                src={exclusiveTop}
                alt="exclusiveLeft"
                className={styles.checkNew}
              />
            </div>
            <div className={styles.exclusiveCenter}>
              <p className={styles.span}>300</p>
              <p className={styles.exclusiveContainerSubTitle}>
                exclusive member listings
              </p>
              <p className={styles.exclusiveContainerDescr}>
                Every month, 300 listings are added to a “members only” area.
                Members have 2 months advanced access to all listings before
                they open to the public.
              </p>
              {/* <div className={styles.memberBtnContainer}>
                <button className={styles.btnExclusive}>
                  See Member Listings
                  <img src={arrow} alt="arrow" className={styles.buttonImg} />
                </button>
              </div> */}
            </div>
            <div className={styles.exclusiveImg}>
              <img
                src={exclusiveRight}
                alt="exclusiveRight"
                className={styles.check}
              />
              <img
                src={exclusiveBottom}
                alt="exclusiveRight"
                className={styles.checkNew}
              />
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.reasonsTitle}>
            Exclusive services from our Partners
          </h2>
          <p className={styles.stepsSubTitle}>
            Cover the cost of your membership with exclusive discounts from our
            partners.
          </p>
          <LogoCardMembers />
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.reasonsTitle}>How it works</h2>
          <p className={styles.stepsSubTitle}>
            A dedicated online learning portal for self paced learning through
            the 11 steps to house relocation success.
          </p>
          <div className={styles.computerContainer}>
            <img src={computerImg} alt="computer" />
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.runMemberTitle}>
            Get up and running as a member
          </h2>
          <div className={`${styles.contentWrapper} ${styles.stepChange}`}>
            <div className={styles.contentContainerMember}>
              <h5 className={styles.stepTitle}>
                Step 1. Become a registered user
              </h5>
              <p className={styles.stepText}>
                Sign up as a registered user to download the HRM free e-books,
                attend a free{" "}
                <span className={styles.stepTextSpan}>
                  ‘Getting started with House Relocation’{" "}
                </span>{" "}
                webinar and receive the HRM Monthly newsletter.
              </p>
            </div>
            <div className={styles.imgContainerMember}>
              <img src={stepMember1} alt="step" />
            </div>
          </div>
          <div className={`${styles.contentWrapper} `}>
            <div className={styles.imgContainerMember}>
              <img src={stepMember2} alt="step" />
            </div>
            <div className={styles.contentContainerMember}>
              <h5 className={styles.stepTitle}>
                Step 2. Subscribe to House Relocation Marketplace{" "}
              </h5>
              <p className={styles.stepText}>
                When you become a subscriber, you become a verified user, who
                can send and receive messages about a listing. When you have
                found the house you want, you can become a member to secure your
                new home.
              </p>
            </div>
          </div>
          <div className={`${styles.contentWrapper} ${styles.stepChange}`}>
            <div className={styles.contentContainerMember}>
              <h5 className={styles.stepTitle}>
                Step 3. Become a member of House Relocation Marketplace to learn
                house relocation in just 6 weeks, instead of 2 years on your own
              </h5>
              <p className={styles.stepText}>
                Become a member of House Relocation Marketplace to learn house
                relocation in just 6 weeks, instead of 2 years on your own.
              </p>
            </div>
            <div className={styles.imgContainerMember}>
              <img src={stepMember3} alt="step" />
            </div>
          </div>
          <div className={`${styles.contentWrapper}`}>
            <div className={styles.imgContainerMember}>
              <img src={stepMember4} alt="step" />
            </div>
            <div className={styles.contentContainerMember}>
              <h5 className={styles.stepTitle}>
                Step 4. Set your goals and personalise your membership
                experience
              </h5>
              <p className={styles.stepText}>
                Once you become a member of HRM, you begin your journey to House
                Relocation success. Work with our coaches to set your unique
                goals and create a personalized plan to get you to success
                faster.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.hrm}>
          <div className={styles.hrmInner}>
            <div className={styles.hrmImg}>
              <img src={hrmImg} alt="hrm" />
            </div>
            <div className={styles.hrmContent}>
              <h2 className={styles.hrmTitle}>
                HRM membership, always on, always at your fingertips
              </h2>
              <p className={styles.hrmText}>
                Now you can access all the benefits of membership on your smart
                phone. Search listings, message listers, join webinars and
                access the vast library of member learning resources.
              </p>
              <p className={styles.hrmText}>
                When you register with House Relocation Marketplace, you can
                begin to search from our hundreds of houses across Australia on
                your desktop or mobile.
              </p>
            </div>
          </div>
        </div>
        <section className={styles.commonSection}>
          <h2 className={styles.instTitle}>
            Instagram Reviews from House Relocation Marketplace Members
          </h2>
          <div className={styles.containerInstagramCard}>
            {InstagramCardMemberPageData.map((card, index) => (
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
        <section className={styles.commonSection}>
          <div className={styles.benefitsHrmContainer}>
            <h2 className={styles.commonTitle}>
              All the benefits of HRM for $2.50* a day
            </h2>
            <p className={styles.benefitsHrmText}>
              Unlimited access to All House Relocation Training materials from
              our online training course to our 100 page house relocation guide.
              Get access to the private membership network, participate in live
              calls and workshops.
            </p>
            <p className={styles.benefitsHrmText}>
              Unlimited access to Australia’s only online directory of houses
              for relocation – so you can find your house to relocate today!
              Access to the House Relocation Marketplace trade directory and
              enjoy huge savings on building materials via our builders buyer
              network.
            </p>
            <ModalEarlyBirdDiscount
              children={
                <div className={styles.memberBtnContainer}>
                  <button className={styles.memberBtn}>
                    Become a Member Today
                  </button>
                </div>
              }
            />
            <p className={styles.gst}>*Plus GST</p>
          </div>
          <MultipleRowsSlider
            children={MultipleRow1.map((item, index) => (
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
            childrenSecond={MultipleRow2.map((item, index) => (
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
        <section className={styles.commonSection}>
          <div className={styles.membershipFastContainer}>
            <h2 className={styles.commonTitle}>
              Membership, your fast track to success
            </h2>
            <p className={styles.membershipFastText}>
              House Relocation Marketplace will teach you all about the housing
              industry's best kept secrets, and help you build your future
              faster. You will learn how to get a house sooner, for less money
              and pay down your debt quickly. We will help you find a house and
              connect you with other house relocators. You will learn how to get
              more choice, more space and more value when you relocate a house.
              We offer no gimmicks or fancy marketing campaigns. We help you
              build your future.
            </p>
          </div>
          <SuccessSlider
            children={successCardData.map((item, index) => (
              <SuccessCard
                src={item.src}
                key={index}
                description={item.description}
                position={item.position}
                site={item.site}
              />
            ))}
          />
        </section>
        <section className={styles.commonSection}>
          <div className={styles.benefitsHrmContainer}>
            <h2 className={styles.commonTitle}>
              Members save $600,000 on the average $1.2M home
            </h2>
          </div>
          <SuccessSlider
            children={successCardData2.map((item, index) => (
              <SuccessCardSmall
                src={item.src}
                key={index}
                description={item.description}
                position={item.position}
              />
            ))}
          />
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.commonTitle}>
            HRM membership's latest benefits
          </h2>
          <p className={styles.membershipLatestBenefitsText}>
            Work with our home relocation valuer to forecast the value of your
            new home
          </p>
          <div className={styles.relocationValuesContainer}>
            <div className={styles.upgradeContainer}>
              <h6 className={styles.relocationContentSubTitle}>
                Attend our monthly coaching sessions with our relocation experts
                to ask one on one questions
              </h6>
              <p className={styles.relocationContentText}>
                As a House Relocation Marketplace member, you now get access to
                House Relocation Live. You’ll be invited to join engaging lives
                sessions featuring house relocation specialists and leading
                relocation industry experts.
              </p>
              <p className={styles.relocationContentText}>
                You will not only become a House Relocation Master, you will
                also get the chance to meet hundreds of members acrosss
                Australia, in these empowering, value packed events. At our live
                coaching sessions, you will have the chance to ask your own
                questions, and learn from the questions of others. Every week,
                we will bring you experts in the field. You can watch past
                coaching sessions on House Relocation's coaching library.
              </p>
            </div>
          </div>
          <div className={styles.relocationValuesContainer}>
            <h6 className={styles.relocationSubTitle}>
              HRM’s other special guests include:
            </h6>
            <div className={styles.gridSteps}>
              {joinSliderStep2.map((item, index) => (
                <div className={styles.sliderStepCard} key={index}>
                  <img
                    src={item.src}
                    alt={item.src}
                    className={styles.sliderItem}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.relocationValuesContainer}>
            <h6 className={styles.relocationSubTitle}>
              Join our Facebook group to connect to the member community
            </h6>
            <p className={styles.relocationContentText}>
              House Relocation Marketplace members get their own private Social
              Network. Connect with fellow house relocation renovators. Ask
              questions, share your insights and strategies with other house
              relocators. Connect with Australia’s only dedicated house
              relocation community and help save the planet, one house
              relocation at a time.
            </p>
          </div>
          <div className={styles.groupImageContainer}>
            <img src={membersImg} alt="members" />
          </div>
          <MarketplaceAppComponent />
          <div className={styles.relocationValContainer}>
            <h2 className={styles.coachingTitle}>
              Upgrade to Membership Pro to become a house relocation investor
            </h2>
            <p className={styles.coachingDescription}>
              HRM Membership Pro is for investors and Real Estate Agents who
              wish to specialise in creating wealth through house relocation.
              You will network and learn from a switched on community who always
              stay ahead of the curve on house relocation.
            </p>
            <div className={styles.chipsContainer}>
              <p
                className={`${styles.chip} ${styles.learnMoreChip}`}
                onClick={() => navigate("/resources")}
              >
                Learn More
              </p>
            </div>
            
          </div>
          <div className={styles.videoContainer}>
            {/* <video src={Video} className={styles.videoStyles} controls></video> */}
                {isVideoPlaying ? (
        <video src={Video} controls autoPlay onPlay={handleVideoPlay} className={styles.videoStyles}/>
      ) : (
        <img className={styles.coverImg} src={buyImg} alt="Video Thumbnail" onClick={handleVideoPlay} />
      )}
            </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.runMemberTitle}>Coming in 2024</h2>
          <div className={styles.poweredWrapper}>
            <div className={styles.poweredContent}>
              <h5 className={styles.poweredTitle}>Powered Learning</h5>
              <p className={styles.poweredText}>
                By early 2024 House Relocation Marketplace will be able to
                customize house relocation for each members unique goals,
                preferences and desired project outcomes.
              </p>
              <p className={styles.poweredText}>
                Every house relocation project has its own challenges and
                objectives. House Relocation Marketplace, will allow you create
                your own unique plan supported by our team of experts, and
                growing library of member success stories. You can dream big
                with HRM, dream up renovations, extensions, landscaping,
                interior design, and swimming pools and we can bring them to
                life.
              </p>
              <p className={styles.poweredSubText}>
                Available for House Relocation Members in 2024.
              </p>
            </div>
            <div className={styles.poweredImg}>
              <img src={poweredImg} alt="powered" />
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.reasonsTitle}>
            Shop the member benefits to save thousands
          </h2>
          <p className={styles.investmentsSubText}>
            Get your membership investment back with HRM’s partnership
            discounts.
          </p>
          <div className={styles.benefitsCardsContainer}>
            <BenefitsCard />
          </div>
        </section>
        <section className={styles.commonSection}>
          <h2 className={styles.runMemberTitle}>
            Stories from House Relocation Marketplace members
          </h2>
          <div className={styles.containerInstagramMembersCard}>
            {InstagramCardJoinData.map((card, index) => (
              <InstagramMemberCard
                key={index}
                src={card.src}
                name={card.name}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
        <div className={styles.wrapper7Days}>
          <div className={styles.logoContainer}>
            <img src={logo7Days} alt="7 days free" />
          </div>

          <div>
            <h2 className={styles.riskFreeTitle}>
              Try it for 7 days risk free
            </h2>
            <p className={styles.riskFreeText}>
              You don’t have to say YES right now. You can say MAYBE. Go through
              the House Relocation Materials for{" "}
              <span className={styles.riskSpan}>
                7 days risk-free from your date of purchase
              </span>
              .
            </p>
            <p className={styles.riskFreeText}>
              You can refund yourself anytime with one click. No emails, no
              phone calls, no hassles. Simply go to the refund page and get a
              full refund. No questions asked.
            </p>
          </div>
        </div>
        <YouGet
          title={
            <h2 className={styles.runMemberTitle}>
              Become a House Relocation Marketplace member today
            </h2>
          }
          childrenArr={whatYouGetList2}
        />
        <div className={styles.memberCardsWrapper}>
          <MemberCards
            title="Membership for Real Estate Agents"
            src={learnIcon}
            onClick={() => scrollToSection(realEstateQuestionRef)}
            text="to find out more about House Relocation Marketplace for developers."
          />
          <MemberCards
            title="Membership for Developers"
            src={growthIcon}
            onClick={() => scrollToSection(developersQuestionRef)}
            text=" to find out more about House Relocation Marketplace for developers."
          />
        </div>
        <section className={styles.buzzSection}>
          <h2 className={styles.membersTitle}>
            The Buzz on House Relocation Marketplace Membership
          </h2>

          {/* <WatchWebinarLast /> */}
          <iframe 
          src="https://heartsandminds123.sharepoint.com/sites/HeartsandMinds/_layouts/15/embed.aspx?UniqueId=bcbb723d-b846-4dc9-8f94-f81bbf70fd97&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
           frameborder="0"
            title="Members react to HRM.mp4"
            className={styles.videoStyles}></iframe>
             {/* {isVideoPlaying ? (
        <video src={VideoLink} controls autoPlay onPlay={handleVideoPlay} className={styles.videoStyles}/>
      ) : (
        <img src={buyImg} alt="Video Thumbnail" onClick={handleVideoPlay} />
      )} */}
        </section>
        <YouOrder />
        <section className={styles.commonSection}>
          <h2 className={styles.runMemberTitle}>Frequently Asked Questions</h2>
          <div className={styles.accordionContainer}>
            <div
              className={styles.accordionContainerUpper}
              ref={realEstateQuestionRef}
            >
              <FAQ
                childrenArr={accordionJoin}
                name="Membership for Home Owners"
              />
            </div>
            <div ref={developersQuestionRef}>
              <FAQ
                ref={developersQuestionRef}
                childrenArr={accordionJoin2}
                name="Membership for  Real Estate Agents and Developers"
              />
            </div>
          </div>
        </section>
        <section className={styles.commonSection}>
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
      </main>
      <Footer />
    </>
  );
};

export default MembersPage;
