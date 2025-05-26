import React from 'react';
import styles from './DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Welcome Back, Dr. Smith 👋</h2>
      <p className={styles.subheading}>Here's a summary of your dashboard.</p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Appointments</h3>
          <p>8 scheduled</p>
        </div>
        <div className={styles.card}>
          <h3>Tests Pending</h3>
          <p>3 labs</p>
        </div>
        <div className={styles.card}>
          <h3>Messages</h3>
          <p>5 unread</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
