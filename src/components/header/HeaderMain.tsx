import React from "react";
import styles from "../../styles/header/HeaderMain.module.css";
import HeaderFilter from "./HeaderFilter";

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
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
