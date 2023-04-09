import React from "react";
import styles from "../../styles/header/HeaderFilter.module.css";
import Dropdown from "./Dropdown";
import RangeInput from "./RangeInput";
import { filterBoxes, rangeData } from "@/variables/filterItems";

const HeaderFilter = () => {
 

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
