'use client'
import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav((prev) => !prev);
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>FALCON</span>
            <span className={styles.logoSubtext}>ANALYTICS</span>
          </Link>
        </div>
        
        <nav className={showNav ? styles.navMenuActive + ' ' + styles.navLinks : styles.navLinks}>
          <Link href="/" className={styles.navItem}>About</Link>
          <Link href="/" className={styles.navItem}>Products</Link>
          <Link href="/" className={styles.navItem}>Services</Link>
          <Link href="/" className={styles.navItem}>Contact</Link>
        </nav>

        <img src="/icons/menu.png" className={styles.menu} alt="menu" onClick={handleClick}/>
      </div>
    </header>
  );
}