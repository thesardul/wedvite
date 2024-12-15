"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css"; // Import the CSS module
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Logo with Image */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="./assets/logo1.svg" // Path to your logo image
            alt="Wedding Logo"
            width={110} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </Link>
        </div>

      <div className={styles.logo}>
        <Link href="/">CountDown Timer</Link>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
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
        className={`${styles.mobileMenuIcon} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
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
