import React from "react";
import styles from "./LatestItemCard.module.scss";
import { latestItemNewsCardsData } from "../../mockedData/blogItem/latestItemCards";
import { useNavigate, useParams } from "react-router-dom";

const LatestItemCard = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const handleClick = (label, id) => {
    if (label === "ebooks") {
      navigate(`/resources/${label}`);
    } else {
      navigate(`/resources/${label}/${id}`);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {latestItemNewsCardsData
        .filter((item) => item.sectionParam !== category)
        .map((item) => (
          <div
            className={styles.cardContainer}
            key={item.id}
            onClick={() => handleClick(item.sectionParam, item.id)}
          >
            <div className={styles.cardBody}>
              <p className={styles.cardSection}>{item.section}</p>
              <a href={item.src2} className={styles.linkDownload}>
                <p className={styles.cardTitle}>{item.title}</p>
              </a>
            </div>
            <img className={styles.cardImg} src={item.src} alt={item.id} />
          </div>
        ))}
    </div>
  );
};

export default LatestItemCard;
