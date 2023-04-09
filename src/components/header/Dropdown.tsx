import React, { useState } from "react";
import styles from "../../styles/header/DropDown.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title }: any) => {

  const iconCaret: IconProp = faCaretDown;


  const [selected, setSelected] = useState("أي");

  const [open, setOpen] = useState("");

  const handleMenu = (d: any) => {
    setOpen("");
    if (open) {
      setOpen("");
    } else {
      setOpen(title);
    }
  };

  return (
    <div
      // onClick={() => handleMenu(title)}
      className={open === title ? styles.dropdownLong : styles.dropdown}
    >
      <label htmlFor="">{title}</label>

      <ul className={open === title ? styles.menuOpen : styles.menuClosed}>
        <li>
          {selected}

          <FontAwesomeIcon icon={iconCaret} className={styles.icon} />
        </li>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
  );
};

export default Dropdown;
