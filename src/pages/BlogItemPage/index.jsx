import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import "react-h5-audio-player/lib/styles.css";
import { Chip } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LatestItemCard from "../../components/LatestItemCard";
import RelatedCard from "../../components/RelatedCard";
import { successStoriesArr } from "../../mockedData/blogItem/successStories";
import { ebooksArr } from "../../mockedData/blogItem/ebooks";
import { podcastsArr } from "../../mockedData/blogItem/podcasts";
import { newsArticlesArr } from "../../mockedData/blogItem/news";
import { chipBlogStyles } from "../../constants/styles/chipBlog";
import styles from "./BlogItemPage.module.scss";
import twitterIcon from "../../assets/socials/twitter.svg";
import instagram from "../../assets/socials/instagram.svg";
import facebook from "../../assets/socials/facebook.svg";
import linkIcon from "../../assets//socials/link.svg";


const BlogItemPage = () => {
  const { category, id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  let navigate = useNavigate();
  const sanitizer = DOMPurify.sanitize;

  const handleClick = (param) => {
    setCurrentId(param);
    navigate(`/resources/${param}`);
  };

  useEffect(() => {
    setCurrentId(id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
     <Helmet>
      <title>House Relocation Marketplace Resources - News, Success Stories, Podcasts, E-books</title>
      <meta name="description" content="Explore the latest news, inspiring success stories, informative podcasts, and a wealth of e-books in our House Relocation Marketplace Resources. Gain valuable insights for your house relocation journey." />
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

          <div className={styles.blogContainer}>
            {category === "news" &&
              newsArticlesArr
                .filter((el) => el.id.toString() === currentId.toString())
                ?.map((item, index) => (
                  <div key={index} className={styles.articleContainer}>
                    <span>{item.section}</span>
                    <h3 className={styles.postsTitle}>{item.title}</h3>
                    <div className={styles.upperWrapper}>
                      <div className={styles.innerLeftWrapper}>
                        <div className={styles.imgContainer}>
                          <img src={item.src} alt="img" />
                        </div>
                        <div className={styles.contentWrapper}>
                          <div className={styles.contentContainer}>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text),
                              }}
                            />
                            <div className={styles.imgContainerInner}>
                              <img src={item.src2} alt="img2" />
                            </div>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text2),
                              }}
                            />
                            <div className={styles.imgContainerInner}>
                              <img src={item.src3} alt="img3" />
                            </div>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text3),
                              }}
                            />
                          </div>
                          <div className={styles.socialContainer}>
                            <a
                              href="https://twitter.com/?lang=en"
                              target="_blanc"
                            >
                              <img src={twitterIcon} alt="twitter" />
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blanc"
                            >
                              <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blanc">
                              <img src={facebook} alt="facebook" />
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blanc"
                            >
                              <img src={linkIcon} alt="link" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.latestContainer}>
                        <h3 className={styles.latestTitle}>Latest</h3>
                        <div className={styles.latestPosts}>
                          <LatestItemCard />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            {category === "success-stories" &&
              successStoriesArr
                .filter((el) => el.id.toString() === currentId.toString())
                .map((item, index) => (
                  <div key={index}>
                    <span>{item.section}</span>
                    <h3 className={styles.postsTitle}>{item.title}</h3>
                    <div className={styles.upperWrapper}>
                      <div className={styles.innerLeftWrapper}>
                        <div className={styles.imgContainer}>
                          <img src={item.src} alt="img" />
                        </div>
                        <div className={styles.contentWrapper}>
                          <div className={styles.contentContainer}>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text),
                              }}
                            />
                            <div className={styles.imgContainerInner}>
                              <img src={item.src2} alt="img2" />
                            </div>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text2),
                              }}
                            />
                            <div className={styles.imgContainerInner}>
                              <img src={item.src3} alt="img3" />
                            </div>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text3),
                              }}
                            />
                          </div>
                          <div className={styles.socialContainer}>
                            <a
                              href="https://twitter.com/?lang=en"
                              target="_blanc"
                            >
                              <img src={twitterIcon} alt="twitter" />
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blanc"
                            >
                              <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blanc">
                              <img src={facebook} alt="facebook" />
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blanc"
                            >
                              <img src={linkIcon} alt="link" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.latestContainer}>
                        <h3 className={styles.latestTitle}>Latest</h3>
                        <div className={styles.latestPosts}>
                          <LatestItemCard />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            {category === "podcasts" &&
              podcastsArr
                .filter((el) => el.id.toString() === currentId.toString())
                .map((item, index) => (
                  <div key={index}>
                    <span>{item.section}</span>
                    <h3
                      className={styles.postsTitle}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.header),
                      }}
                    />

                    <div className={styles.upperWrapper}>
                      <div className={styles.innerLeftWrapper}>
                        <div className={styles.imgContainer}>
                          <img src={item.src} alt="img" />
                        </div>
                        <div className={styles.podcastPlayerContainer}>
                          <AudioPlayer
                            style={{ borderRadius: "1rem" }}
                            src={item.url}
                            onPlay={(e) => console.log("onPlay")}
                            showSkipControls={false}
                            showJumpControls={true}
                            header={`Now playing: ${item.urlTitle}`}
                          />
                          <div className={styles.podcastTextContainer}>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.urlText),
                              }}
                            />
                          </div>
                        </div>
                        <div className={styles.contentWrapper}>
                          <div className={styles.contentContainer}>
                            <p
                              className={styles.text}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(item.text),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.latestContainer}>
                        <h3 className={styles.latestTitle}>Latest</h3>
                        <div className={styles.latestPosts}>
                          <LatestItemCard />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            {category === "ebooks" &&
              ebooksArr
                .filter((el) => el.id.toString() === currentId.toString())
                ?.map((book, index) => (
                  <div key={index} className={styles.ebookContainer}>
                    <span>{book.section}</span>
                    <div key={book.id} className={styles.bookWrapper}>
                      <a
                        href={book.src}
                        // download
                        className={styles.linkDownload}
                      >
                        {book.title}
                      </a>
                    </div>
                  </div>
                ))}
          </div>

          <div className={styles.blogRelatedContainer}>
            <h3 className={styles.postsTitle}>Related News</h3>
            <div className={styles.relatedCardContainer}>
              {category === "news" &&
                newsArticlesArr
                  .filter((el) => el.id.toString() !== currentId.toString())
                  .slice(0, 3)
                  .map((item, index) => (
                    <RelatedCard
                      key={index}
                      src={item.src}
                      title={item.subTitle}
                      textDescription={item.textDescription}
                      children={
                        <div className={styles.btnContainerToggle}>
                          <button
                            onClick={() =>
                              navigate(`/resources/${category}/${item.id}`)
                            }
                          >
                            Continue Reading
                          </button>
                        </div>
                      }
                    />
                  ))}
              {category === "success-stories" &&
                successStoriesArr
                  .filter((el) => el.id.toString() !== currentId.toString())
                  .slice(0, 3)
                  .map((item, index) => (
                    <RelatedCard
                      key={index}
                      src={item.src}
                      title={item.subTitle}
                      textDescription={item.textDescription}
                      children={
                        <div className={styles.btnContainerToggle}>
                          <button
                            onClick={() =>
                              navigate(`/resources/${category}/${item.id}`)
                            }
                          >
                            Continue Reading
                          </button>
                        </div>
                      }
                    />
                  ))}
              {category === "ebooks" &&
                ebooksArr
                  .filter((el) => el.id.toString() !== currentId.toString())
                  .slice(0, 3)
                  .map((book) => (
                    <div key={book.id} className={styles.bookWrapper}>
                      <a
                        href={book.src}
                        // download
                        className={styles.linkDownload}
                        onClick={() => navigate(`/resources/${category}`)}
                      >
                        {book.title}
                      </a>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogItemPage;
