import React from "react";
import styles from "../../styles/header/HeaderTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSackDollar,
  faGlobe,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeaderTop = () => {
  const iconDollar: IconProp = faSackDollar;
  const iconGlobe: IconProp = faGlobe;
  const iconPhone: IconProp = faPhone;
  const iconLogin: IconProp = faUser;

  const iconFB: IconProp = faFacebookF;
  const iconG: IconProp = faGooglePlusG;
  const iconT: IconProp = faTwitter;

  return (
    <div className={styles.headerTop}>
      {/* headerTop>div is here  */}
      <div>
        <div className={styles.leftSide}>
          <div className={styles.iconGroup}>
            <FontAwesomeIcon icon={iconDollar} className={styles.icon} />
            <span className={styles.iconText}>ريال 0</span>
          </div>

          <div className={styles.iconGroup}>
            <FontAwesomeIcon icon={iconGlobe} className={styles.icon} />
            <span className={styles.iconText}>إنجليزي</span>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.phone}>
            <FontAwesomeIcon icon={iconPhone} className={styles.icon} />
            <span className={styles.phoneText}>+966 57 792 1670</span>
          </div>

          {/* socialIcons */}
          <div className={styles.socialIcons}>
            {/* <span></span> */}
            <FontAwesomeIcon icon={iconFB} className={styles.socialIcon} />
            <FontAwesomeIcon icon={iconG} className={styles.socialIcon} />
            <FontAwesomeIcon icon={iconT} className={styles.socialIcon} />
          </div>

          {/* login button */}
          <div className={styles.login}>
            <FontAwesomeIcon icon={iconLogin} className={styles.icon} />
            <span className={styles.iconText}>تسجيل الدخول</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
