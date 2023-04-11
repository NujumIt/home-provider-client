import React from "react";
import styles from "../../styles/agents/AgentsCard.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AgentsCard = ({ agent }: any) => {
  const iconFB: IconProp = faFacebookF;
  const iconG: IconProp = faGooglePlusG;
  const iconLinkedIn: IconProp = faLinkedin;
  const iconMessage: IconProp = faMessage;
  return (
    <div className={styles.agentsCard}>
      <div className={styles.imgWrapper}>
        <Image
          width={300}
          height={250}
          src={agent.img}
          alt={agent.fullName}
        ></Image>

        {/* positionally absolute div for hover effect */}
        <div className={styles.hoverEffect}>
          <FontAwesomeIcon icon={iconMessage} className={styles.socialIcon} />
          <FontAwesomeIcon icon={iconFB} className={styles.socialIcon} />
          <FontAwesomeIcon icon={iconLinkedIn} className={styles.socialIcon} />
          <FontAwesomeIcon icon={iconG} className={styles.socialIcon} />

        </div>
      </div>
      <h2>{agent.fullName}</h2>
      <h3>{agent.phn}</h3>
      <Link className={styles.link} href={agent.img}>
        اقرأ المزيد
      </Link>
    </div>
  );
};

export default AgentsCard;
