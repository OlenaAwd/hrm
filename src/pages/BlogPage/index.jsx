import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import { Chip } from "@mui/material";
import EbookCard from "../../components/ebookCard";
import ModalPodcastVideo from "../../components/ModalPodcastVideo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { chipBlogStyles } from "../../constants/styles/chipBlog";
import { newsArticlesArr } from "../../mockedData/blogItem/news";
import { successStoriesArr } from "../../mockedData/blogItem/successStories";
import { podcastsArr } from "../../mockedData/blogItem/podcasts";
import { ebooksArr } from "../../mockedData/blogItem/ebooks";
import styles from "./BlogPage.module.scss";
import PodcastLogo from "../../assets/podcastLogo.png";
import microphoneIcon from "../../assets/microphoneIcon.svg";



const BlogPage = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  let navigate = useNavigate();
  const sanitizer = DOMPurify.sanitize;

  const handleClick = (label) => {
    setCurrentId(label);
    if (label === "news") {
      navigate("/resources/news");
    } else if (label === "success-stories") {
      navigate("/resources/success-stories");
    } else if (label === "podcasts") {
      navigate("/resources/podcasts");
    } else if (label === "ebooks") {
      navigate("/resources/ebooks");
    }
  };

  return (
    <>
    <Helmet>
      <title>House Relocation Marketplace Resources - Stay Informed, Explore Success Stories, and Access E-books</title>
      <meta name="description" content="Discover the latest news, inspiring success stories, and a collection of e-books in House Relocation Marketplace's resource library. Stay informed and learn more about house relocation." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <h2 className={styles.sectionTitle}>
            House Relocation Marketplace Resources
          </h2>
          <div className={styles.chipContainer}>
            <Chip
              label="News"
              variant="outlined"
              sx={chipBlogStyles}
              id="news"
              onClick={() => handleClick("news")}
            />
            <Chip
              label="Success Stories"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => handleClick("success-stories")}
            />
            <Chip
              label="Podcasts"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => handleClick("podcasts")}
            />
            <Chip
              label="E-books"
              variant="outlined"
              sx={chipBlogStyles}
              onClick={() => handleClick("ebooks")}
            />
          </div>
          {currentId === "news" && id === "news" && (
            <div className={styles.blogContainer}>
              <span>NEWS</span>
              {newsArticlesArr.map((item) => (
                <div
                  key={item.id}
                  className={styles.wrapperNews}
                  onClick={() => {
                    navigate(`/resources/news/${item.id}`);
                  }}
                >
                  <div className={styles.imgContainer}>
                    <img src={item.src} alt="news-img" />
                  </div>
                  <div className={styles.contentContainer}>
                    <h5 className={styles.newsTitle}>{item.subTitle}</h5>
                    <p
                      className={styles.text}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.textDescription),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentId === "success-stories" && id === "success-stories" && (
            <div className={styles.blogContainer}>
              <span>SUCCESS STORIES</span>
              {successStoriesArr.map((item) => (
                <div
                  key={item.id}
                  className={styles.wrapperNews}
                  onClick={() => {
                    navigate(`/resources/success-stories/${item.id}`);
                  }}
                >
                  <div className={styles.imgContainer}>
                    <img src={item.src} alt="news-img" />
                  </div>
                  <div className={styles.contentContainer}>
                    <h5 className={styles.newsTitle}>{item.subTitle}</h5>
                    <p
                      className={styles.text}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.textDescription),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentId === "podcasts" && id === "podcasts" && (
            <div className={styles.blogContainer}>
              <span>PODCASTS</span>
              <h3 className={styles.podcastHeader}>
                House Relocation Marketplace Podcasts
              </h3>
              {podcastsArr.map((item) => (
                <div
                  key={item.id}
                  className={styles.podcastsContainer}
                  onClick={() => {
                    console.log("you re right");
                    // navigate(`/resources/podcasts/${item.id}`);
                  }}
                >
                  <div className={styles.wrapperPodcastCard}>
                    <ModalPodcastVideo src={item.url} />
                    <div className={styles.leftSide}>
                      <div className={styles.logoContainer}>
                        <img src={PodcastLogo} alt="logo" />
                      </div>

                      <div className={styles.microphoneContainer}>
                        <img src={microphoneIcon} alt="microphone" />
                      </div>
                      <span className={styles.podcastText}>podcasts</span>
                    </div>
                    <div className={styles.rightSide}>
                      <img src={item.src} alt={item.id} />
                    </div>
                    <div className={styles.rightSideTextContainer}>
                      <p
                        className={styles.rightSideText}
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(item.span),
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.textWrapper}>
                    <h4
                      className={styles.titlePodcast}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.header),
                      }}
                    />
                    <p className={styles.comingText}>Coming soon in 2023</p>
                    <div className={styles.itemContainer}>
                      <label htmlFor="list" className={styles.label}>
                        Join the wait list
                      </label>
                      <input
                        id="list"
                        placeholder="Email"
                        // value={name}
                        // onChange={handleChangeName}
                        type="email"
                        className={styles.input}
                      />
                    </div>
                    <ul className={styles.comingList}>
                      <b>What we will cover in this podcast</b>
                      {item.points.map((element) => (
                        <li className={styles.comingItem} key={element.id}>
                          {element.point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentId === "ebooks" && id === "ebooks" && (
            <div className={styles.blogContainer}>
              <span>E-BOOKS</span>
              <h2 className={styles.ebookTitle}>
                House Relocation Marketplace E-book Library
              </h2>
              <div className={styles.ebookContainer}>
                {ebooksArr.map((book) => (
                  <EbookCard
                    key={book.id}
                    img={book.img}
                    title={book.title}
                    cost={book.cost}
                    description={book.description}
                    href={book.href}
                    type={book.type}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
