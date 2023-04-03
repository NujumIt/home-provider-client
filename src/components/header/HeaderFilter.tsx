import React from "react";
import styles from "../../styles/header/HeaderFilter.module.css";
import Dropdown from "./Dropdown";
import RangeInput from "./RangeInput";

const HeaderFilter = () => {
  const filterBoxes = [
    {
      title: "Property Location",
    },
    {
      title: "Property Type",
    },
    {
      title: "Property Feature",
    },
  ];

  const rangeData = [{ title: "Built-up area(sq fr)", min: "1", max: "50" },
  { title: "Price", min: "100", max: "500" },
  { title: "Bathrooms", min: "1", max: "5" }
];

  return (
    <div className={styles.headerFilter}>
      {filterBoxes.map((f: any) => (
        <Dropdown key={f.title} title={f.title}></Dropdown>
      ))}

     {
      rangeData.map((r:any)=>( <RangeInput key={r.title} data={r}></RangeInput>))
     }

     <button>
Submit
     </button>
    </div>
  );
};

export default HeaderFilter;
