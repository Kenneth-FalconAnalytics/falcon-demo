import Link from 'next/link';
import styles from './featureCard.module.css';

const cardsData = [
  {
    title: "Bond Track",
    subtitle: "Economic & Market Intelligence",
    text: "A multi-sector intelligence platform delivering dashboards across public finance, energy, and macroeconomic indicators — enabling continuous monitoring, trend analysis, and evidence-based policy and investment decisions.",
    href: "https://bondtrack.org/"
  },
  {
    title: "Skills Track",
    subtitle: "Capability-on-Demand",
    text: "Data-driven insight into skills, roles, and training needs — aligning institutional capability with organisational priorities, delivery risk, and future requirements.",
    href: "/training"
  },
  {
    title: "Executive Intelligence",
    subtitle: "Judgement Support for Leaders",
    text: "An executive decision-support capability that embeds institutional knowledge, context, and precedent — enabling leaders, including newly appointed executives, to ask the right questions and make sound, defensible decisions quickly.",
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
            <h4 className={styles.cardSubtitle}>{card.subtitle}</h4>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}