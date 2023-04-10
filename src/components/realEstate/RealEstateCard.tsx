import React from "react";
import styles from "../../styles/realEstate/RealEstateCard.module.css";
import Image from "next/image";

const RealEstateCard = ({ data }: any) => {
  return (
    <div className={styles.realEstateCard}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.cardImg}
          src={data.img}
          alt="home"
          width={350}
          height={175}
        ></Image>

        {/* positionally absolute hover effect on card */}
        <div className={styles.hoverEffect}>
          <div>
            <h3>نوع العقار: كوخ</h3>
            <h3>نوع العقد: {data.status}</h3>
            <h3>تاريخ الإضافة: منذ 7 سنوات</h3>
            <small>هذا نص دامي بسبع كلمات...</small>
            <p><span>تاريخ الإضافة: منذ 7 سنوات</span> <button>عرض التفاصيل</button></p>
          </div>
        </div>
      </div>


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
