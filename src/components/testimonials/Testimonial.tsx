import React from "react";
import styles from "../../styles/testimonial/Testimonial.module.css";
import TestimonialSlider from "./TestimonialSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "مايكل بيل",
      prof: "مدون",
      text: "هو ببساطة نص شكلي (بمعنى أن الغرض منه هو الحصول على تصميم وشكل النص وليس محتواه) يستخدم في صناعات المطابع ودور النشر. وكان لهذا النص بداياته في القرن الخامس عشر عندما قام باحث مجهول بتصوير مجموعة من الأحرف بشكل عشوائي أخذ عينة من النص لتمثيل",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510926/home-provider/worker-3-112x0-c-center_qclhuh.jpg",
    },
    {
      name: "آنا أوليفر",
      prof: "ربة منزل",
      text: "هو ببساطة نص شكلي (بمعنى أن الغرض منه هو الحصول على تصميم وشكل النص وليس محتواه) يستخدم في صناعات المطابع ودور النشر. وكان لهذا النص بداياته في القرن الخامس عشر عندما قام باحث مجهول بتصوير مجموعة من الأحرف بشكل عشوائي أخذ عينة من النص لتمثيل",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/04-1-112x0-c-center_osekmj.jpg",
    },
    {
      name: "كارولين رينولد",
      prof: "مدير تسويق",
      text: "هو ببساطة نص شكلي (بمعنى أن الغرض منه هو الحصول على تصميم وشكل النص وليس محتواه) يستخدم في صناعات المطابع ودور النشر. وكان لهذا النص بداياته في القرن الخامس عشر عندما قام باحث مجهول بتصوير مجموعة من الأحرف بشكل عشوائي أخذ عينة من النص لتمثيل",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510921/home-provider/02-1-112x0-c-center_iqsfpx.jpg",
    },
    {
      name: "جوزيف ريان",
      prof: "مصمم",
      text: "هو ببساطة نص شكلي (بمعنى أن الغرض منه هو الحصول على تصميم وشكل النص وليس محتواه) يستخدم في صناعات المطابع ودور النشر. وكان لهذا النص بداياته في القرن الخامس عشر عندما قام باحث مجهول بتصوير مجموعة من الأحرف بشكل عشوائي أخذ عينة من النص لتمثيل",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510921/home-provider/01-1-112x0-c-center_ihrp0d.jpg",
    },
    {
      name: "فانيسا كاسينسكي",
      prof: "مدير علامة تجارية",
      text: "هو ببساطة نص شكلي (بمعنى أن الغرض منه هو الحصول على تصميم وشكل النص وليس محتواه) يستخدم في صناعات المطابع ودور النشر. وكان لهذا النص بداياته في القرن الخامس عشر عندما قام باحث مجهول بتصوير مجموعة من الأحرف بشكل عشوائي أخذ عينة من النص لتمثيل",
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510921/home-provider/03-1-112x0-c-center_rla1bp.jpg",
    },
  ];


  const tSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    delay: 5000,
    arrows: false, 

  };

  return (
    <div className={styles.testimonial}>
      <h1>شهادة</h1>
      <p>
        نظرات، نصائح، وأدلة حول بيع العقارات وإعداد منزلك أو عقار الاستثمار
        الخاص بك للبيع
      </p>
      <div>
        <div>
          <Slider
         {...tSettings}
          >
            {testimonials.map((test: any) => (
              <TestimonialSlider key={test.img} data={test}></TestimonialSlider>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
