import React from 'react';
import styles from "../../styles/chart/Chart.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faBuilding, faDollar, faUser } from '@fortawesome/free-solid-svg-icons';

const Chart = () => {
    const iconUser: IconProp = faUser;
    const iconBag: IconProp = faBriefcase;
    const iconBuilding: IconProp = faBuilding;
    const iconDollar: IconProp = faDollar;




    const chartData = [
        {
            title: "عملاء راضون",
            count: "17 620",
            icon: iconUser,
        },
        {
            title: "معاملات",
            count: "755 300",
            icon: iconBag,
        },
        {
            title: "وكالات",
            count: "790",
            icon: iconBuilding,
        },
        {
            title: "مبيعات وإيجارات",
            count: "1 528 715",
            icon: iconDollar,
        },
    ];
    return (
        <div className={styles.chart}>
            {
                chartData.map((data:any)=>(
                    <div key={data.title}>
                        <FontAwesomeIcon className={styles.icon} icon={data.icon}></FontAwesomeIcon>
                        <h2>{data.count}</h2>
                        <h4>{data.title}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default Chart;