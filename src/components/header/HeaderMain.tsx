import React, { useState } from "react";
import styles from "../../styles/header/HeaderMain.module.css";
import HeaderFilter from "./HeaderFilter";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "../modals/FilterModal";
import Image from "next/image";

const HeaderMain = () => {
  const iconScroll: IconProp = faArrowDown;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.headerMain}>
      {/* scrollDown group positionally absolute */}

      <div className={styles.scrollDown}>
        <small>تمرير للأسفل للتعرف على المزيد</small>
        <FontAwesomeIcon icon={iconScroll} className={styles.scrollIcon} />
      </div>

      {/* scrollDown group positionally absolute ended */}

      {!openModal && (
        <div className={styles.textContainer}>
          <h1>أفضل طريقة للعثور على منزلك</h1>
          <p>
            بفضل أكثر من 700،000 عرض نشط، تتمتع بأكبر مخزون من الشقق في الولايات
            المتحدة
          </p>
          <Image
            className={styles.getStarted}
            width={400}
            height={300}
            alt="logo"
            src="https://res.cloudinary.com/dr2vztyib/image/upload/v1681066626/home-provider/get-started_tsqruo.png"
          ></Image>
        </div>
      )}

      {/* here will be the form of filter. this will be visible is smaller devices only */}
      <div className={styles.filterContainer}>
        <HeaderFilter></HeaderFilter>
      </div>

      {/* modal for filtering */}
      {openModal && <FilterModal setOpenModal={setOpenModal}></FilterModal>}
    </div>
  );
};

export default HeaderMain;
