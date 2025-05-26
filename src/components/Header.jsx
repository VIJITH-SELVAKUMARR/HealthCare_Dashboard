import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>Healthcare.</h1>
        <input
          type="text"
          className={styles.search}
          placeholder="Search..."
          readOnly
        />
      </div>

      <div className={styles.rightSection}>
        <button className={styles.icon}>🔔</button>
        <div className={styles.profile}>
          <img
            src="https://via.placeholder.com/32"
            alt="User"
            className={styles.avatar}
          />
          <span className={styles.name}>Dr. Smith</span>
        </div>
        <button className={styles.addButton}>＋</button>
      </div>
    </div>
  );
};

export default Header;

