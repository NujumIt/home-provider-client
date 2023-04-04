import React from "react";
import styles from "../../styles/realEstate/RealEstateContainer.module.css";
import RealEstateCard from "./RealEstateCard";
const RealEstateContainer = () => {

    const reData = [
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510923/home-provider/15-830x540-c-center_sjagd2.jpg", title: "Property & sidebar agent", location:"Sublevel, Hialeah, Florida", price: "113859", status:"Urgent Sale"},
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510923/home-provider/14-554x360-c-center_wtdlgn.jpg", title: "Property & agent at bottom", location:"Miami, Florida", price: null, status:"Sale"},
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/10-554x360-c-center_pgmywc.jpg", title: "Modern apartment on 5th floor with views of the Lake", location:"Saint PetersBug, Florida", price: "113859", status:"Sale"},
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/09-554x360-c-center_drltpn.jpg", title: "Sell beautiful Studio in one of the best areas", location:"New York", price: "875000", status:"Sale"},
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/08-554x360-c-center_ayusxe.jpg", title: "Apartment for sale with high quality finishing", location:"New York", price: "875000", status:"Sale"},
        { img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/01-554x360-c-center_jbyqlc.jpg", title: "For sale beautiful apartment on Park Avenue", location:"New York", price: "1250", status:"rent"},
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
