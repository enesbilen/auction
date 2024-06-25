"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineNotificationsActive, MdLaptop, MdArrowRightAlt } from "react-icons/md";
import styles from './notifications.module.scss';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className={styles.icon}>
      <MdOutlineNotificationsActive size={22} className={styles.figure} />

      <div className={styles.notification}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3 className="text-white">Bildirimler</h3>
            <span className="badge badge-info my-1">33 Hızlı Bağlantı</span>
          </div>
          <div className={styles.tabContent}>
            <div className={`${styles.tab} ${activeTab === "tab1" ? styles.active : ""}`}
              onClick={() => setActiveTab("tab1")}>
              <span className="text-gray-50 fs-1">Başlayacak Mezatlar</span>
            </div>
            <div className={`${styles.tab} ${activeTab === "tab2" ? styles.active : ""}`}
              onClick={() => setActiveTab("tab2")}>
              <span className="text-gray-50 fs-1">Sistem Bildirimleri</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          {activeTab === "tab1" &&
            <div className={styles.inner}>
              <div className={styles.title}>
                <MdLaptop size={20} color="blue" />
                <div className="mb-0 mr-2">
                  <Link href="#" className="d-flex d-flex-column text-gray-800 text-hover-primary fw-600">Laptop Mezat
                    <span className="text-gray-800 fw-500 fs-1">Model Marka</span>
                  </Link>

                </div>
              </div>
              <span className="badge badge-primary">1 Saat</span>
            </div>
          }
          {activeTab === "tab2" && <div>Tab 2 Content</div>}
        </div>
        <div className={styles.footer}>
          <a href="#" className={styles.view}>
            Tümünü Görüntüle <MdArrowRightAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
