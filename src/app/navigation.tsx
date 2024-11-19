'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css'; // Import the CSS module

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">Wedding</Link>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#venue">Venue</Link>
        </li>
        <li>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div 
        className={`${styles.mobileMenuIcon} ${isMobileMenuOpen ? styles.open : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navigation;
