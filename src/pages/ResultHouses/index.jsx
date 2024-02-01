import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {useSelector } from 'react-redux';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchComponent from "../../components/SearchComponent";
import useSize from "../../hooks/useSize";
import { selectFilter, } from '../../slices/filter';
import { BathroomTypeEnum, BedroomTypeEnum, ConditionTypesEnum } from "../../constants/enums";
import styles from "./ResultHouses.module.scss";


const ResultHouses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { resultArr} = useSelector(selectFilter);

  function translateEnumValue(enumType, value) {
    const enumMapping = enumType[value];
    if (enumMapping) {
      return enumMapping;
    }
    return 'Unknown';
  }
  const {width}=useSize();
  const navigate = useNavigate();

 

  return (
    <>
     <Helmet>
      <title>Marketplace of House Relocation find check all results of House Relocation Marketplace</title>
      <meta name="description" content="Discover relocatable houses and save up to $600,000 through House Relocation Marketplace." />
      </Helmet>
      <Header />
      <main>
      <SearchComponent />
        <section className={styles.commonSection}>
          {resultArr.length ? 
          <div>
        {resultArr.map(item=>(
          <div className={styles.card} onClick={()=> navigate(`/listing-details/${item.id}`)}>
              <div className={styles.cardImg}>
                <img  src={item.images[0].url} alt={`${item.images[0].id}`} />
              </div>
              <div className={styles.cardDescription}>
              <p className={styles.condition}>{translateEnumValue(ConditionTypesEnum, item.conditionTypes)}</p>
              <div className={styles.utilityContainer}>
              <p>{translateEnumValue(BedroomTypeEnum, item.bedroomType)} bed</p>
              <p>{translateEnumValue(BathroomTypeEnum, item.bathroomType)} bath</p>
              </div>
              <p>{width> 860 ? item.description.length > 1100
              ? `${item.description.substring(0, 1100)}...`
              : item.description : item.description.length > 450
              ? `${item.description.substring(0, 450)}...`
              : item.description}</p>
              </div>
          </div>
        ))}
    </div> : <h2 className={styles.resultText}>Not found any results</h2>}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResultHouses;
