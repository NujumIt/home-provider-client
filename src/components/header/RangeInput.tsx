import React from "react";
import styles from "../../styles/header/RangeInput.module.css";
const RangeInput = ({ data }: any) => {
  return (
    <div className={styles.rangeInput}>
      <label htmlFor="">{data.title}</label>
      <div>
        <span className={styles.valueBox}></span>
        <span className={styles.valueBox}></span>
      </div>

      <input type="range" max={data.max} min={data.min} />

    </div>
  );
};

export default RangeInput;
