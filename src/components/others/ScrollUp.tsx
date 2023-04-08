import React, { useEffect, useState } from "react";
import styles from "../../styles/others/ScrollUp.module.css"
const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 0.75 * window.innerHeight) {
        setShowScroll(true);
      } else if (
        showScroll &&
        window.pageYOffset <= 0.75 * window.innerHeight
      ) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <span
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`${styles.puller} ${
          !showScroll ? styles.onTop : styles.onScroll
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2C3E50"
          className={styles.chevron}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </span>
    </>
  );
};

export default ScrollUp;
