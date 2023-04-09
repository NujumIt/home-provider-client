import React from "react";
import styles from "../../styles/header/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {/* <li> */}
        {/* <Image width="24" height="22" src="https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/mhk3tfn6x9mkmhz2iclyva2cjaja67f5_j1lscg.svg" alt='logo'></Image> */}
        {/* </li> */}
        <li>
          <Link href="#">
            <Image
              className={styles.navLogo}
              src="https://res.cloudinary.com/dr2vztyib/image/upload/v1681060041/logo/logo-white_hd9dp6.png"
              alt="logo"
              width={140}
              height={70}
            ></Image>
          </Link>
        </li>
      </ul>

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

export default Navbar;
