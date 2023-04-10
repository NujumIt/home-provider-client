import React from "react";
import styles from "../../styles/mission/MissionCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MissionCard = ({ mission, i}: any) => {
  return (
    <div className={`${styles.missionCard} ${styles.gridItem + i +1}`}>
      {/* <FontAwesomeIcon icon={mission.icon} className={styles.icon} /> */}

      <span className={styles.icon}>{mission?.icon}</span>

      <h1>{mission.title}</h1>
      <p>{mission.text}</p>
    </div>
  );
};

export default MissionCard;
