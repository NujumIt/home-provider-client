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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2C3E50"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ),
      title: "سهولة العثور",
      text: "بالإضافة إلى ذلك، يدير ريلتي سبيس أكبر شبكات الإعلان عن العقارات والإيجارات في الولايات المتحدة بالشراكة مع لايفميل هومز!",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2C3E50"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "مبيعات وتسويق جيدة",
      text: "بالإضافة إلى ذلك، تعمل RealtySpace على أكبر شبكات الإعلان عن العقارات والإيجار في الولايات المتحدة بالشراكة مع Livemile Homes",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2C3E50"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "توفير المال",
      text: "يبدأ الأمر بقاعدة بياناتنا الحية التي تضم أكثر من 110 مليون منزل في الولايات المتحدة - بما في ذلك المنازل المعروضة للبيع والمنازل المعروضة للإيجار والمنازل التي لا تعرض حاليًا في السوق",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2C3E50"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
      title: "الراحة",
      text: "نحن نحول طريقة اتخاذ المستهلكين للقرارات المتعلقة بالمنزل والتواصل مع المحترفين.",
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
          {missionInfo.map((mission:any, i:any) => (
            <MissionCard key={i} mission={mission} i={i}></MissionCard>
          ))}
        </div>
        {/* card container ended */}
      </div>
    </div>
  );
};

export default MissionContainer;
