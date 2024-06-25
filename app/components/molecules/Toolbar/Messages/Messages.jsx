"use client"
import React, { useState } from 'react';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import styles from './messages.module.scss';

const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.icon} onClick={togglePanel}>
        <MdOutlineLocalPostOffice size={22} className={styles.figure} />
      </div>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={togglePanel}>
        <div className={`${styles.panel} ${isOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
          {/* Panel İçeriği Buraya Gelecek */}
          <h2>Messages</h2>
          <p>Bu bir mesaj paneli.</p>
        </div>
      </div>
    </>
  );
};

export default Messages;
