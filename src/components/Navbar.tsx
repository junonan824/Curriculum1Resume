'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply theme on component mount and when theme changes
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (prefersDarkMode) {
      setIsDarkMode(true);
    }
  }, []);

  // Effect to apply theme changes
  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#1a1a1a' : '#ffffff');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About Me
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
} 