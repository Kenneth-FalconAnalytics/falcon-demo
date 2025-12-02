'use client'
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>FALCON</span>
            <span className={styles.logoSubtext}>ANALYTICS</span>
          </Link>
        </div>
        
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navItem}>About</Link>
          <Link href="/" className={styles.navItem}>Products</Link>
          <Link href="/" className={styles.navItem}>Services</Link>
          <Link href="/" className={styles.navItem}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}