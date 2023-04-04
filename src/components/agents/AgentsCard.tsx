import React from 'react';
import styles from "../../styles/agents/AgentsCard.module.css"
import Image from 'next/image';
import Link from 'next/link';

const AgentsCard = ({agent}:any) => {
    return (
        <div className={styles.agentsCard}>
            <Image width={300} height={250} src={agent.img} alt={agent.fullName}></Image>
            <h2>{agent.fullName}</h2>
            <h3>{agent.phn}</h3>
            <Link className={styles.link} href={agent.img}>اقرأ المزيد</Link>
        </div>
    );
};

export default AgentsCard;