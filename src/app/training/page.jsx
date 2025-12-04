// app/training/page.js

import Header from '@/components/header/Header';
import styles from './training.module.css'; 
import Link from 'next/link';
import TrainingHero from '@/components/trainingHero/TrainingHero';
// Assuming AOS is set up globally or in a wrapper component higher up

export default function TrainingPage() {
  return (
    <> 
      <Header />

      <TrainingHero />

      <main className={styles.container}>
        <section id="courses" className={styles.coursesSection}>
          <h2 data-aos="fade-up" data-aos-once="false">Our Key Training Modules</h2>
          
          <div className={styles.courseGrid}>
            
            <div className={styles.courseCard} data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
              <h3>Data Science & Analytics</h3>
              <p>Master Python, R, and advanced statistical models for data-driven insights.</p>
            </div>

            <div className={styles.courseCard} data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
              <h3>AI & Machine Learning</h3>
              <p>Learn to implement and deploy neural networks and custom AI systems.</p>
            </div>
            
            <div className={styles.courseCard} data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
              <h3>Cloud Infrastructure (AWS/Azure)</h3>
              <p>Build robust and scalable cloud solutions for modern digital operations.</p>
            </div>

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