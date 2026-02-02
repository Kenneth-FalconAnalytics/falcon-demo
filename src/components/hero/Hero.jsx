import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.headline} data-aos="fade-up" data-aos-delay="0">
        Institutional & Executive Intelligence for Decision-Makers
      </h1>
      <p className={styles.tagline} data-aos="fade-up" data-aos-delay="100">
        We help leaders see clearly, decide confidently, and act with evidence.
      </p>
      <button className={styles.ctaButton} data-aos="fade-up" data-aos-delay="200">
        Learn More
      </button>
    </div>
  );
}