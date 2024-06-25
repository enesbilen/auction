"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import * as Icons from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import styles from './profillinks.module.scss';

const ProfilLinks = () => {
  const menuItems = [
    {
      id: "1",
      parentId: "1000",
      img: '',
      icon: 'MdMultipleStop',
      slug: '#',
      title: 'Profil',
      subtitle: 'Profil Ayarları',
      order: "1",
      color: "var(--primary-color)"
    },
    {
      id: "2",
      parentId: "1000",
      img: '',
      icon: 'MdStore',
      slug: '#',
      title: 'Ayarlar',
      subtitle: 'Üyelik Ayarları',
      order: "2",
      color: "var(--danger-color)"
    },
    {
      id: "3",
      parentId: "2",
      img: '',
      icon: 'MdInfo',
      slug: '#',
      title: 'Güvenlik',
      subtitle: 'Üye güvenliği',
      order: "1",
    },
    {
      id: "4",
      parentId: "2",
      img: '',
      icon: 'MdContactMail',
      slug: '#',
      title: 'Faturalandırma',
      subtitle: 'Fatura detaylarım',
      order: "2",
    },
    {
      id: "5",
      parentId: "2",
      img: '',
      icon: 'MdContactMail',
      slug: '#',
      title: 'Hareketlerim',
      subtitle: 'Hareket detaylarım',
      order: "3",
    },
    {
      id: "6",
      parentId: "1000",
      img: '',
      icon: 'MdContactMail',
      slug: '#',
      title: 'Etkinlik',
      subtitle: 'Katıldığım etkinlik detayları',
      order: "3",
    }
  ];

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const mainMenuItems = menuItems.filter(item => item.parentId === "1000");
  const subMenuItems = parentId => menuItems.filter(item => item.parentId === parentId);

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <ul className={styles.menu}>
      {mainMenuItems.map((item) => {
        const IconComponent = Icons[item.icon];
        const hasSubMenu = subMenuItems(item.id).length > 0;
        const isOpen = openSubMenu === item.id;

        return (
          <li key={item.id} className={isOpen ? styles.open : ''}>
            {IconComponent && <IconComponent size={20} color={item.color} />}
            <Link href={item.slug} onClick={() => toggleSubMenu(item.id)}>
              {item.title}
              {hasSubMenu && (
                <span className={styles.arrow}>
                  {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </span>
              )}
            </Link>
            {hasSubMenu && (
              <ul className={styles.subMenu}>
                {subMenuItems(item.id).map(subItem => {
                  const SubIconComponent = Icons[subItem.icon];
                  return (
                    <li key={subItem.id}>
                      {SubIconComponent && <SubIconComponent size={20} color={subItem.color} />}
                      <Link href={subItem.slug}>{subItem.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ProfilLinks;