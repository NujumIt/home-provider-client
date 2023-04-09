import React from "react";
import styles from "../../styles/modals/FilterModal.module.css";
import { filterBoxes, rangeData } from "@/variables/filterItems";
import Dropdown from "../header/Dropdown";
import RangeInput from "../header/RangeInput";

const FilterModal = ({ setOpenModal }: any) => {
  return (
    <div className={styles.modalLayout}>
      {/* positionally absolute cross button ↓↓*/}
      <div className={styles.modalView}>
        <span onClick={() => setOpenModal(false)} className={styles.closeModal}>
          X
        </span>
        {/* positionally absolute cross button ended*/}

        <div className={styles.filterItem}>
          <div>
            {filterBoxes.map((f: any) => (
              <Dropdown key={f.title} title={f.title}></Dropdown>
            ))}

            
          </div>
          <div>
          {rangeData.map((r: any) => (
              <RangeInput key={r.title} data={r}></RangeInput>
            ))}
          </div>

          <div className={styles.buttonWrapper}></div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
