import React from 'react';
import styles from './Sidebar.module.css';
import {
  AiOutlineDashboard,
  AiOutlineHistory,
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineTool,
  AiOutlineSetting,
} from 'react-icons/ai';
import { MdOutlineMedicalServices, MdOutlineChat, MdOutlineSupportAgent } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h2 className={styles.heading}>General</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <AiOutlineDashboard className={styles.icon} /> Dashboard
          </li>
          <li className={styles.navItem}>
            <AiOutlineHistory className={styles.icon} /> History
          </li>
          <li className={styles.navItem}>
            <AiOutlineCalendar className={styles.icon} /> Calendar
          </li>
          <li className={styles.navItem}>
            <MdOutlineMedicalServices className={styles.icon} /> Appointments
          </li>
          <li className={styles.navItem}>
            <AiOutlinePieChart className={styles.icon} /> Statistics
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>Tools</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <MdOutlineChat className={styles.icon} /> Chat
          </li>
          <li className={styles.navItem}>
            <MdOutlineSupportAgent className={styles.icon} /> Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


