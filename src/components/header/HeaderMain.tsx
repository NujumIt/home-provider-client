import React from "react";
import styles from "../../styles/header/HeaderMain.module.css";
import HeaderFilter from "./HeaderFilter";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HeaderMain = () => {
  const iconScroll: IconProp = faArrowDown;

  return (
    <div className={styles.headerMain}>
      {/* scrollDown group positionally absolute */}

      <div className={styles.scrollDown}>
        <small>تمرير للأسفل للتعرف على المزيد</small>
        <FontAwesomeIcon icon={iconScroll} className={styles.scrollIcon} />
      </div>

      {/* scrollDown group positionally absolute ended */}

      <div className={styles.textContainer}>
        <h1>أفضل طريقة للعثور على منزلك</h1>
        <p>
          بفضل أكثر من 700،000 عرض نشط، تتمتع بأكبر مخزون من الشقق في الولايات
          المتحدة
        </p>
      </div>

      {/* here will be the form of filter */}
      <div className={styles.filterContainer}>
        <HeaderFilter></HeaderFilter>
      </div>
    </div>
  );
};

export default HeaderMain;
