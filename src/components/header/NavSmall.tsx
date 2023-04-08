import React, { useState } from "react";
import styles from "../../styles/header/NavSmall.module.css";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavSmall = () => {
  const iconPhone: IconProp = faPhone;
  const iconLogin: IconProp = faUser;
  const iconBars: IconProp = faBars;

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.navSmall}>
      <div>
        <span>Logo</span>
        <Link href="#">
          <FontAwesomeIcon
            icon={iconPhone}
            className={styles.icon}
          ></FontAwesomeIcon>
        </Link>
        <span>
          <FontAwesomeIcon icon={iconLogin} className={styles.icon} />
        </span>
        <span onClick={()=>setOpenMenu(!openMenu)}>
          <FontAwesomeIcon icon={iconBars} className={styles.icon} />
        </span>{" "}
      </div>

      {/* hidden menubar */}
      <ul className={openMenu ? styles.openMenu : styles.closeMenu}>

        <li><span>الرئيسية</span></li>
        <li><span>الخصائص</span></li>
        <li><span>الوكلاء</span></li>
        <li><span>المستخدم</span></li>
        <li><span>الصفحات</span></li>
        <li><span>الصفحات</span></li>
        <li><span>المدوّنة</span></li>
        <li><span>اتصل بنا </span> </li>
      </ul>
    </div>
  );
};

export default NavSmall;
