import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.headline} data-aos="fade-up" data-aos-delay="0">
        Where Strategy Meets Data Intelligence
      </h1>
      <p className={styles.tagline} data-aos="fade-up" data-aos-delay="100">
        Transforming African institutions through analytics, AI systems, and digital capability.
      </p>
      <button className={styles.ctaButton} data-aos="fade-up" data-aos-delay="200">
        Learn More
      </button>
    </div>
  );
}