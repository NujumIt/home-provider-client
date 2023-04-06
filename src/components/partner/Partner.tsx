import React from "react";
import styles from "../../styles/partner/Partner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PartnerCard from "./PartnerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Partner = () => {
  const iconPrev: IconProp = faChevronLeft;
  const iconNext: IconProp = faChevronRight;

  const partners = [
    {
      title: "VideoHive",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-5-175x50-c-center_i7tftr.png",
    },
    {
      title: "themeforest",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-4-175x50-c-center_bimhqm.png",
    },
    {
      title: "photodune",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-3-175x50-c-center_ehdgwp.png",
    },
    {
      title: "VideoHive",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-5-175x50-c-center_i7tftr.png",
    },
    {
      title: "themeforest",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-4-175x50-c-center_bimhqm.png",
    },
    {
      title: "photodune",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510925/home-provider/logo-company-3-175x50-c-center_ehdgwp.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    delay: 1000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className={styles.prev}>
        <FontAwesomeIcon
          style={{ fontSize: "1em", color: "#00BBAA" }}
          icon={iconPrev}
        />
      </button>
    );
  }

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className={styles.next}>
        <FontAwesomeIcon
          style={{ fontSize: "1em", color: "#00BBAA" }}
          icon={iconNext}
        />
      </button>
    );
  }

  return (
    <div className={styles.partner}>
      <h1>الشركاء</h1>
      <p>
        في RS، يجعل شركاؤنا تجارب رقمية رائعة ممكنة عن طريق تقديم منتجاتنا
        وخبرتنا الاستشارية ومنتجات شركاء التكنولوجيا لدينا.
      </p>

      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {partners.map((data: any) => (
            <PartnerCard key={data.img} data={data}></PartnerCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
