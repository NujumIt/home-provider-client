import React from "react";
import styles from "../../styles/realEstate/RealEstateCard.module.css";
import Image from "next/image";

const RealEstateCard = ({ data }: any) => {
  return (
    <div className={styles.realEstateCard}>
      <Image
        className={styles.cardImg}
        src={data.img}
        alt="home"
        width={350}
        height={175}
      ></Image>
      <div className={styles.textContainer}>
        <h2>{data.title}</h2>
        <h2>{data.location}</h2>
        <p>{data.price ? "$" + data.price : "اتصل بنا للحصول على السعر"}</p>
      </div>

      <span className={styles.ribbon}>{data.status}</span>
    </div>
  );
};

export default RealEstateCard;
