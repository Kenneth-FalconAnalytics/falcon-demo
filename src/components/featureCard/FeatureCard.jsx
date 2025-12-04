import Link from 'next/link';
import styles from './featureCard.module.css';

const cardsData = [
  {
    title: "Bondtrack",
    text: "Harness the power of data to drive informed decision-making.",
    href: "https://bondtrack.org/"
  },
  {
    title: "TrainTrack",
    text: "Develop intelligent solutions to automate and optimize processes.",
    href: "/training"
  },
  {
    title: "Digital Capability",
    text: "Build the infrastructure and expertise for digital transformation.",
    href: "/"
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