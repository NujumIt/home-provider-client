import React from 'react';
import styles from "../../styles/newsAndBlog/NewsAndBlogCard.module.css"
import Image from 'next/image';

const NewsAndBlogCard = ({blog}:any) => {
    return (
        <div className={styles.card}>
            <Image src={blog.img} width={300} height={400} alt="home"></Image>
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
            <button>اقرأ المزيد</button>
        </div>
    );
};

export default NewsAndBlogCard;