import React from "react";
import styles from "../../styles/header/HeaderFilter.module.css";
import Dropdown from "./Dropdown";
import RangeInput from "./RangeInput";

const HeaderFilter = () => {
  const filterBoxes = [
    {
      title: "موقع العقار",
    },
    {
      title: "نوع العقار",
    },
    {
      title: "ميزة العقار",
    },
  ];

  const rangeData = [
    { title: "المساحة المبنية (قدم مربع)", min: "1", max: "50" },
    { title: "السعر", min: "100", max: "500" },
    { title: "الحمامات", min: "1", max: "5" },
  ];

  return (
    <div className={styles.headerFilter}>
      {filterBoxes.map((f: any) => (
        <Dropdown key={f.title} title={f.title}></Dropdown>
      ))}

      {rangeData.map((r: any) => (
        <RangeInput key={r.title} data={r}></RangeInput>
      ))}

      <button>أرسل الآن</button>
    </div>
  );
};

export default HeaderFilter;
