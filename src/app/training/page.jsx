import Header from '@/components/header/Header';
import styles from './training.module.css'; 
import Link from 'next/link';
import TrainingHero from '@/components/trainingHero/TrainingHero';
import CourseCard from '@/components/courseCard/CourseCard'; 


const coursesData = [
  {
    id: 1,
    title: "Data Science & Analytics",
    text: "Master Python, R, and advanced statistical models for data-driven insights.",
    icon: "/images/data-analytics.jpg", 
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    text: "Learn to implement and deploy neural networks and custom AI systems.",
    icon: "/images/ai-ml.webp",
  },
  {
    id: 3,
    title: "Cloud Infrastructure (AWS/Azure)",
    text: "Build robust and scalable cloud solutions for modern digital operations.",
    icon: "/images/cloud.webp",
  },
];

export default function TrainingPage() {
  return (
    <> 
      <Header />

      <TrainingHero />

      <main className={styles.container}>
        <section id="courses" className={styles.coursesSection}>
          <h2 data-aos="fade-up" data-aos-once="false">Our Key Training Modules</h2> 
          
          <div className={styles.courseGrid}>

            {coursesData.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                index={index} 
              />
            ))}

          </div>
        </section>

        <div className={styles.backLinkContainer}>
          <Link href="/">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}