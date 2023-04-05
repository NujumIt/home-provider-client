import React from "react";
import styles from "../../styles/footer/FooterRight.module.css";

const FooterRight = () => {
  return (
    <div className={styles.main}>
      <h2>آخر مقال</h2>

      <h3>
        ريال إستيت في <q>Roundup</q>!
      </h3>
      <h4>الثلاثاء - 19 أبريل - 10:39 صباحًا</h4>

      <h3>نحن جاهزون لقواعد TRID!</h3>
      <h4>الجمعة - 15 أبريل - 5:07 مساءً</h4>

      <h3>
        ريال إستيت في <q>Roundup</q>!
      </h3>
      <h4>الثلاثاء - 19 أبريل - 10:39 صباحًا</h4>

      <button>المزيد من المقالات</button>
    </div>
  );
};

export default FooterRight;
