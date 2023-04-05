import React from "react";
import styles from "../../styles/footer/FooterMid.module.css";

const FooterMid = () => {
  return (
    <div className={styles.main}>
      {/* contact part started */}
      <div>
        <h2>اتصل بنا</h2>
        <div className={styles.contact}>
          <p className={styles.virInfo}>
            +1 202 555 0135
            <br />
            +1 202 555 0145
            <br />
            contact@realtyspace.com
          </p>

          <p className={styles.phyInfo}>
            شارع فرانكلين، نيويورك، نيويورك ١٠٠١٣ الولايات المتحدة الأمريكية من
            الإثنين إلى الجمعة
          </p>
        </div>
      </div>
      {/* contact part ended */}

      {/* feedback started */}
      <div className={styles.feedback}>
        <h2>تقييم</h2>
        <input placeholder="البريد الإلكتروني" type="email" />
        <textarea placeholder="رسالة لنا" name="" id=""></textarea>
        <button>إرسال</button>
      </div>

      {/* feedback ended */}
    </div>
  );
};

export default FooterMid;
