import React from "react";
import styles from "../../styles/realEstate/RealEstateContainer.module.css";
import RealEstateCard from "./RealEstateCard";
const RealEstateContainer = () => {

  const reData = [
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510923/home-provider/15-830x540-c-center_sjagd2.jpg", title: "وكيل العقارات والشريط الجانبي", location:"سوبليفيل، هياليا، فلوريدا", price: "113859", status:"بيع عاجل"},
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510923/home-provider/14-554x360-c-center_wtdlgn.jpg", title: "العقار والوكيل في الأسفل", location:"ميامي، فلوريدا", price: null, status:"للبيع"},
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/10-554x360-c-center_pgmywc.jpg", title: "شقة حديثة في الطابق الخامس بإطلالة على البحيرة", location:"سانت بيترزبيرغ، فلوريدا", price: "113859", status:"للبيع"},
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/09-554x360-c-center_drltpn.jpg", title: "بيع ستوديو جميل في واحدة من أفضل المناطق", location:"نيويورك", price: "875000", status:"للبيع"},
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/08-554x360-c-center_ayusxe.jpg", title: "شقة للبيع بتشطيبات عالية الجودة", location:"نيويورك", price: "875000", status:"للبيع"},
    { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/01-554x360-c-center_jbyqlc.jpg", title: "للبيع شقة جميلة في بارك أفينيو", location:"نيويورك", price: "1250", status:"للإيجار"},
    ]

  return (
    <div className={styles.container}>
      <h1>العقارات</h1>
      <p>
        بفضل أكثر من 700،000 عرض نشط، تتمتع بأكبر مخزون من الشقق في الولايات
        المتحدة
      </p>

      <div className={styles.buttonContainer}>
        <button>حديث</button>
        <button>مميز</button>
      </div>

      <div className={styles.cardContainer}>
        {
          reData.map((data:any)=>(

            <RealEstateCard key={data.img} data={data}></RealEstateCard>
          ))
        }
      </div>
    </div>
  );
};

export default RealEstateContainer;
