import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import * as Icons from 'react-icons/md';

import styles from './links.module.scss';

const Links = () => {
  const menuItems = [
    {
      id: "1",
      parentId: "1000",
      img: '',
      icon: 'MdMultipleStop',
      slug: '#',
      title: 'Açık Arttırmalar',
      subtitle: 'En yeni ürünler',
      order: "1",
      type:"1",
      color: "var(--icon-primary)"
    },
    {
      id: "2",
      parentId: "1000",
      img: '',
      icon: 'MdStore',
      slug: '#',
      title: 'Satıcı Olun',
      subtitle: 'Ürünlerinizi satın',
      order: "2",
      type:"2",
      color: "var(--icon-danger)"
    },
    {
      id: "3",
      parentId: "1000",
      img: '',
      icon: 'MdInfo',
      slug: '#',
      title: 'Hakkımızda',
      subtitle: 'Firmamız hakkında bilgi',
      type:"3",
      order: "3",
      color: "var(--icon-info)"
    },
    {
      id: "4",
      parentId: "1000",
      img: '',
      icon: 'MdContactMail',
      slug: '#',
      title: 'İletişim',
      subtitle: 'Bize ulaşın',
      type:"3",
      order: "4",
      color: "var(--icon-primary)"
    },
    {
      id: "5",
      parentId: "1",
      img: '',
      icon: 'MdDirectionsCar',
      slug: '#',
      title: 'Araba',
      subtitle: 'Araç ve taşıtlar',
      type:"1",
      order: "1",
      color: "var(--icon-danger)"
    },
    {
      id: "6",
      parentId: "1",
      img: '',
      icon: 'MdChair',
      slug: '#',
      title: 'Mobilya',
      subtitle: 'Ev eşyaları',
      type:"1",
      order: "2",
      color: "var(--icon-warning)"
    },
    {
      id: "7",
      parentId: "1",
      img: '',
      icon: 'MdToys',
      slug: '#',
      title: 'Oyuncak',
      subtitle: 'Çocuk oyunları',
      type:"1",
      order: "3",
      color: "var(--icon-success)"
    },
    {
      id: "8",
      parentId: "1",
      img: '',
      icon: 'MdDevices',
      slug: '#',
      title: 'Teknoloji',
      subtitle: 'Elektronik ürünler',
      type:"1",
      order: "4",
      color: "var(--icon-info)"
    },
    {
      id: "9",
      parentId: "2",
      img: '',
      icon: 'MdAddCircle',
      slug: '#',
      title: 'Yeni Ürün Ekle',
      subtitle: 'Ürünlerinizi mezata ekleyin',
      type:"2",
      order: "1",
      color: "var(--icon-success)"
    },
    {
      id: "10",
      parentId: "2",
      img: '',
      icon: 'MdList',
      slug: '#',
      title: 'Satışlarım',
      subtitle: 'Satışlarınızı yönetin',
      type:"2",
      order: "2",
      color: "var(--icon-info)"
    },
  ];

  const mainMenuItems = menuItems.filter(item => item.parentId === "1000");

  const subMenuItems = (parentId) => {
    const subMenu = menuItems.filter(item => item.parentId === parentId);
    return subMenu.length > 0 ? subMenu : null;
  };

  const getClassByType = (type) => {
    switch(type) {
      case "1":
        return styles.type1;
      case "2":
        return styles.type2;
      case "3":
        return styles.type3;
      default:
        return '';
    }
  };

  return (
    <ul className={styles.menu}>
      {mainMenuItems.map(mainItem => {
        const IconComponent = Icons[mainItem.icon];
        const subMenu = subMenuItems(mainItem.id); 
        const mainClass = getClassByType(mainItem.type);

        return (
          <li key={mainItem.id} className={mainClass}>
            {mainItem.img && (
              <Image src={`/images/${mainItem.img}`} alt={mainItem.title} width={30} height={30} />
            )}
            {IconComponent && <IconComponent size={20} color={mainItem.color} />}
            <Link href={mainItem.slug}>{mainItem.title}</Link>
            
            {subMenu && ( 
              <ul className={styles.submenu}>
                {subMenu.map(subItem => {
                  const SubIconComponent = Icons[subItem.icon];
                  const subClass = getClassByType(subItem.type);
                  return (
                    <li key={subItem.id} className={subClass}>
                      {subItem.img && (
                        <Image src={`/images/${subItem.img}`} alt={subItem.title} width={30} height={30} />
                      )}
                      {SubIconComponent && <SubIconComponent size={30} color={subItem.color} />}
                      <div className='d-flex d-flex-column'>
                        <Link className='fw-600' href={subItem.slug}>{subItem.title}</Link>
                        <span className='text-gray-600 fs-1 fw-500'>{subItem.subtitle}</span>
                      </div>
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

export default Links;