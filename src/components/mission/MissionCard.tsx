import React from "react";
import styles from "../../styles/mission/MissionCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MissionCard = ({ mission }: any) => {
  return (
    <div className={styles.missionCard}>
      <FontAwesomeIcon icon={mission.icon} className={styles.icon} />

      <h1>{mission.title}</h1>
      <p>{mission.text}</p>
    </div>
  );
};

export default MissionCard;
