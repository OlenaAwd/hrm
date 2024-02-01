import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {useSelector } from 'react-redux';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderHouse from "./SliderHouse";
import { selectFilter, } from '../../slices/filter';
import { BathroomTypeEnum, BedroomTypeEnum, ConditionTypesEnum, StyleTypesEnum, monthNames } from "../../constants/enums";
import styles from "./ListingDetailsPage.module.scss";
import verifiedIcon from "../../assets//verified.svg"


const ListingDetailsPage = () => {
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
  
  let { id } = useParams();
  const findHouse = resultArr.find((item) => item.id===Number(id)); 
  const getDate= new Date(findHouse.availability);

const date = new Date(getDate);
const monthIndex = date.getMonth();
const monthName = monthNames[monthIndex];
const day = date.getDate();



  return (
    <>
    <Helmet>
      <title>Listing of House Relocation Marketplace</title>
      <meta name="description" content="Discover relocatable house through House Relocation Marketplace." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <div className={styles.card} >
            <SliderHouse arr={findHouse.images}/>
            <div className={styles.cardInfo}>
              <p className={styles.address}>{findHouse.address}</p>
              <p className={styles.cost}>${findHouse.cost}</p>
              <div className={styles.utilityContainer}>
              <ul className={styles.listDescr}>
                <li>{translateEnumValue(BedroomTypeEnum, findHouse.bedroomType)}bed</li>
             
                <li>{translateEnumValue(BathroomTypeEnum, findHouse.bathroomType)} bath</li>
             <li>Available {monthName} {day}</li>
             </ul>
              </div>
              <div className={styles.verifiedContainer}>
                <img src={verifiedIcon} alt="verified" />
              <p className={styles.text}>{translateEnumValue(ConditionTypesEnum, findHouse.conditionTypes)}</p> 
              </div>
              <div className={styles.verifiedContainer}>
                <img src={verifiedIcon} alt="verified" />
              <p className={styles.text}>{translateEnumValue(StyleTypesEnum, findHouse.styleTypes)}</p> 
              </div>
             
            </div>
          </div>
          <p className={styles.description}>{findHouse.description}</p>
  
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ListingDetailsPage;
