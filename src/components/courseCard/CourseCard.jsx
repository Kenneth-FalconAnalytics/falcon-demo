import React from 'react';
import styles from './courseCard.module.css'; 

export default function CourseCard({ course, index }) {
  const delay = index * 100; 

  return (
    <div className={styles.courseCard} data-aos="fade-up" data-aos-delay={delay}data-aos-once="false">
      <div className={styles.cardImgContainer}>
        <img src={course.icon} alt={`${course.title} Icon`} className={styles.cardImg} />
      </div>
      
      <div className={styles.cardContent}>
        <h3>{course.title}</h3>
        <p>{course.text}</p>
      </div>
    </div>
  );
}