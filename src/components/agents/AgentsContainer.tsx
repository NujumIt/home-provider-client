import React from "react";
import AgentsCard from "./AgentsCard";
import styles from "../../styles/agents/AgentsContainer.module.css";

const AgentsContainer = () => {
  const agents = [
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/worker-2-500x480-c-center_cnf6ab.jpg",
      fullName: "Helene Powers",
      phn: "+12025550124",
    },
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/worker-3-500x480-c-center_mfz081.jpg",
      fullName: "Vladimir Babic",
      phn: "+12025550165",
    },
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/worker-4-500x480-c-center_n3tcee.jpg",
      fullName: "Mariusz Ciesla",
      phn: "+12025550155",
    },
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/worker-2-500x480-c-center_cnf6ab.jpg",
      fullName: "Lisa Wemert",
      phn: "+12025550144",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>عملاؤنا</h1>
      <p>
        عملاؤنا هم متخصصون مرخصون في البحث والتقييم والتفاوض على شراء العقارات
        نيابة عن المشتري. سيساعدونك على بيع العقارات، ويوفرون لك نصائح ومعلومات
        حول بيع العقارات وإعداد المنزل أو العقار الاستثماري للبيع والعمل على
        تحقيق أعلى سعر بيع لديك.
      </p>
      <div>
        {agents.map((agent: any) => (
          <AgentsCard key={agent.img} agent={agent}></AgentsCard>
        ))}
      </div>
    </div>
  );
};

export default AgentsContainer;
