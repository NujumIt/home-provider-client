import React from "react";
import styles from "../../styles/newsAndBlog/NewsAndBlog.module.css";
import NewsAndBlogCard from "./NewsAndBlogCard";

const NewsAndBlog = () => {
  const blogs = [
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/10-554x360-c-center_pgmywc.jpg",
      title: "ملخص العقارات",
      text: "زادت مبيعات المنازل الجديدة في شهر مايو بنسبة 2.2٪ مقارنة بشهر أبريل. وكانت مبيعات المنازل الجديدة منفردة الأسرة في مايو 2015 بمعدل سنوي معدل بلغ 546،000 وحدة، مع إجراء التعديلات الموسمية. ",
    },
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/03-830x540-c-center_ebx1iy.jpg",
      title: "نحن مستعدون",
      text: "في الساعة 5 مساءً بتوقيت شرق الولايات المتحدة في 17 يونيو، أصدر مكتب حماية المستهلك المالية بيانًا يفيد بأن تاريخ سريان قواعد الإفصاح الموحدة بين قانون الإفصاح عن الرهن العقاري وقانون إعادة تمويل الرهن العقاري (TRID) سيتم تأجيله إلى الأول من أكتوبر.",
    },
    {
      img: "https://res.cloudinary.com/dr2vztyib/image/upload/v1680510922/home-provider/05-830x540-c-center_gp9tcc.jpg",
      title: "ملخص العقارات",
      text: "صناعة البناء المنزلي النشطة ستؤدي إلى زيادة الطلب على مساحات التخزين، والإنفاق القوي من قبل المستهلكين وارتفاع نشاط بناء المنازل هما في الوقت الحالي العوامل الرئيسية التي تدفع الطلب على الخدمات اللوجستية ومساحات التخزين",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>الأخبار والمدونة</h1>
      <div>
        {
            blogs.map((blog:any)=>(
                <NewsAndBlogCard key={blog.img} blog={blog}></NewsAndBlogCard>
            ))
        }

      </div>
      <button>اقرأ المزيد</button>
    </div>
  );
};

export default NewsAndBlog;
