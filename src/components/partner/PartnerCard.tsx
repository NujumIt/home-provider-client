import React from "react";
import styles from "../../styles/partner/PartnerCard.module.css";
import Image from "next/image";

const PartnerCard = ({ data }: any) => {
  return (
      <div className={styles.partnerCard}>
        <Image src={data.img} alt="brand" width={200} height={100}></Image>
        <h3>{data.title}</h3>
      </div>
  );
};

export default PartnerCard;
