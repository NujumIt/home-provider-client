import React from "react";
import styles from "../../styles/testimonial/TestimonialSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialSlider = ({ data }: any) => {
  return (
    <div className={styles.slideCard}>
      <div>
        <div className={styles.imgWrapper}>
          <Image width={150} height={150} alt="avatar" src={data.img}></Image>
        </div>

        <div className={styles.infoWrapper}>
          <h2>{data.name}</h2>
          <h3>{data.prof}</h3>
        </div>
      </div>

      <p>{data.text}</p>
    </div>
  );
};

export default TestimonialSlider;
