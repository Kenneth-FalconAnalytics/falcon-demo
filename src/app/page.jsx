import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/featureCard/FeatureCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Hero />

      <FeatureCard />

      <section className={styles.profitSection}>
        <div className={styles.profitTextContainer}>
          <h2 data-aos="fade-right" data-aos-once="false">Make Your Business More Profitable</h2>
          <p data-aos="fade-up" data-aos-once="false">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button data-aos="fade-up" data-aos-once="false">Get Started</button>
        </div>

        <div className={styles.profitImgContainer}>
          <img src="/images/img1.svg" alt="Business Growth Chart" className={styles.profitImg} data-aos="fade-left" data-aos-once="false"/>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImgWrapper}>
            <img src="/images/img2.svg" alt="About Us" className={styles.aboutImg} data-aos="fade-right" data-aos-once="false"/>
          </div>

          <div className={styles.aboutTextWrapper}>
            <h4 data-aos="fade-left" data-aos-once="false">Our Mission</h4>
            <p data-aos="fade-up" data-aos-once="false">
              To empower African institutions through cutting-edge analytics, AI systems, and digital capabilities. We strive to transform businesses and drive sustainable growth across the continent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <ul className={styles.missionList} data-aos="fade-up" data-aos-once="false">
              <li>We focus on sustainable growth.</li>
              <li>We use cutting-edge AI systems.</li>
              <li>We deliver actionable analytics.</li>
            </ul>

            <button className={styles.learnMoreBtn} data-aos="fade-up" data-aos-once="false">Learn More</button>
          </div>
        </div>
      </section>
    
    </div>
  );
}
