import React from "react";
import styles from "../../styles/footer/Footer.module.css";
import Image from "next/image";
import FooterLeft from "./FooterLeft";
import FooterMid from "./FooterMid";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.details}>
        {/* left part of footer ↓↓ */}
        <FooterLeft></FooterLeft>

        {/* middle part of the footer ↓↓ */}
        <FooterMid></FooterMid>

        {/* right part of the footer ↓↓*/}
        <FooterRight></FooterRight>
      </div>

      <div className={styles.footerImg}></div>
      <div className={styles.copyright}>
        © 2023 نُجُوم. جميع الحقوق محفوظة
      </div>
    </div>
  );
};

export default Footer;
