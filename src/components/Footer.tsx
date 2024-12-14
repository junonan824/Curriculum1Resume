import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 