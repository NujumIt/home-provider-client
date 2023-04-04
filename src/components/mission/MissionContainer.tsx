import React from "react";
import styles from "../../styles/mission/MissionContainer.module.css";
import Image from "next/image";
import MissionCard from "./MissionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChartBar,
  faMagnifyingGlass,
  faSackDollar,
  faChartSimple,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const MissionContainer = () => {
  const [hydrated, setHydrated] = React.useState(false);

  const iconDollar: IconProp = faSackDollar;
  const icoChart: IconProp = faChartSimple;
  const iconMag: IconProp = faMagnifyingGlass;
  const iconSun: IconProp = faSun;

  const missionInfo = [
    {
      icon: iconDollar,
      title: "توفير المال",
      text: "يبدأ الأمر بقاعدة بياناتنا الحية التي تضم أكثر من 110 مليون منزل في الولايات المتحدة - بما في ذلك المنازل المعروضة للبيع والمنازل المعروضة للإيجار والمنازل التي لا تعرض حاليًا في السوق",
    },
    {
      icon: icoChart,
      title: "مبيعات وتسويق جيدة",
      text: "بالإضافة إلى ذلك، تعمل RealtySpace على أكبر شبكات الإعلان عن العقارات والإيجار في الولايات المتحدة بالشراكة مع Livemile Homes",
    },
    {
      icon: iconMag,
      title: "الراحة",
      text: "نحن نحول طريقة اتخاذ المستهلكين للقرارات المتعلقة بالمنزل والتواصل مع المحترفين.",
    },
    {
      icon: iconSun,
      title: "سهولة العثور",
      text: "يبدأ الأمر بقاعدة بياناتنا الحية التي تضم أكثر من 110 مليون منزل في الولايات المتحدة - بما في ذلك المنازل المعروضة للبيع والمنازل المعروضة للإيجار والمنازل التي لا تعرض حاليًا في السوق",
    },
  ];

  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className={styles.missionContainer}>
      <Image
        width={700}
        height={700}
        src="https://res.cloudinary.com/dr2vztyib/image/upload/v1680510924/home-provider/bg-feature_mzqa3u.jpg"
        alt="man-sitting"
      ></Image>

      <div className={styles.textContainer}>
        <h1>مهمتنا</h1>
        <p>
          تمكين المستهلكين بالمعلومات اللازمة لاتخاذ قرارات ذكية. ريلتي سبيس هي
          سوق عقارية مخصصة لمساعدة أصحاب المنازل والمشترين والبائعين والمستأجرين
          والوكلاء في العثور على المعلومات ومشاركتها حول المنازل والعقارات
          وتحسينها.
        </p>
        {/* card container */}
        <div>
          {missionInfo.map((mission: any) => (
            <MissionCard key={mission.img} mission={mission}></MissionCard>
          ))}
        </div>
        {/* card container ended */}
      </div>
    </div>
  );
};

export default MissionContainer;
