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
        <span>
          <FontAwesomeIcon icon={iconBars} className={styles.icon} />
        </span>{" "}
      </div>

      {/* hidden menubar */}
      <ul>
        <li>الرئيسية</li>
        <li>الخصائص</li>
        <li>الوكلاء</li>
        <li>المستخدم</li>
        <li>الصفحات</li>
        <li>المعرض</li>
        <li>المدوّنة</li>
        <li>اتصل بنا</li>
      </ul>
    </div>
  );
};

export default NavSmall;
