import Link from 'next/link';
import styles from './featureCard.module.css';

const cardsData = [
  {
    title: "Bond Track",
    text: "Economic & Market Intelligence \n A multi-sector intelligence platform delivering dashboards across public finance, energy, and macroeconomic indicators — enabling continuous monitoring, trend analysis, and evidence-based policy and investment decisions.",
    href: "https://bondtrack.org/"
  },
  {
    title: "Skills Track",
    text: "Capability-on-Demand \n Data-driven insight into skills, roles, and training needs — aligning institutional capability with organisational priorities, delivery risk, and future requirements.",
    href: "/training"
  },
  {
    title: "Digital Capability",
    text: "Judgement Support for Leaders \n An executive decision-support capability that embeds institutional knowledge, context, and precedent — enabling leaders, including newly appointed executives, to ask the right questions and make sound, defensible decisions quickly.",
    href: "https://bondtrack.org/chatai/"
  },
];

export default function FeatureCard() {
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, index) => (
        <Link 
          key={index} 
          href={card.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.cardLink} 
        >
          <div 
            className={styles.card} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}