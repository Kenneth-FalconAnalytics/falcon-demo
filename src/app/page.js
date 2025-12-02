import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/featureCard/FeatureCard";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <Hero />

      <FeatureCard />

      <section className={styles.container}>
        
      </section>
    </div>
  );
}
