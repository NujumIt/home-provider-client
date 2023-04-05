import React from "react";
import styles from "../../styles/footer/FooterLeft.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLeft = () => {
  const iconFB: IconProp = faFacebookF;
  const iconG: IconProp = faGooglePlusG;
  const iconT: IconProp = faTwitter;
  return (
    <div className={styles.main}>
      <div>
        <h2>قائمة الطعام</h2>
        <p>
          معرض الصور مع الصور المخصصة التي تم تحميلها \ مدونة \ اتصل بنا \ وكلاء
          \ جميع الأسئلة المتداولة{" "}
        </p>
      </div>

      <div>
        <h2>حول</h2>
        <p>
          ريلتي سبيس هي الرائدة في مجال العقارات عبر الإنترنت ومشغلة موقع WK
          للعقارات على الويب للمستهلكين والمتخصصين في مجال العقارات. يجذب موقع
          العقارات عبر الإنترنت أكثر من 20 مليون زائر شهريًا.
        </p>
      </div>

      <div>
        <h2>الشبكات الاجتماعية</h2>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={iconFB} className={styles.socialIcon} />
          <FontAwesomeIcon icon={iconG} className={styles.socialIcon} />
          <FontAwesomeIcon icon={iconT} className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
