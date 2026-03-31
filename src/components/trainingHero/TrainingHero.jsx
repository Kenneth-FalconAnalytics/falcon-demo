"use client"
import Link from 'next/link'
import React from 'react'
import styles from './trainingHero.module.css'

export default function TrainingHero() {
  return (
    <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>

          <h1 className={styles.title} data-aos="fade-up">
            Unlock Your Team's Full Digital Potential
          </h1>

          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
            Transform your team's capabilities through advanced analytics, AI systems, and digital infrastructure training.
          </p>
          <Link href="">
            <button className={styles.ctaButton} data-aos="zoom-in" data-aos-delay="200">
              GET STARTED
            </button>
          </Link>
          
        </div>
      </div>
  )
}
