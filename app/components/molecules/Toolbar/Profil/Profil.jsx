"use client"
import React, { useState, useEffect } from 'react';
import { MdOutlinePerson } from 'react-icons/md';
import styles from './profil.module.scss';
import ProfilLinks from './ProfilLinks';
import Image from 'next/image';
import Link from 'next/link';

const Profil = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (e.target.closest(`.${styles.wrapper}`) === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);


  const profil = {
    img: '/image/profil/maxsmith.jpg', 
    name : 'Max Smith',
    mail : 'm@m.com',
    state : 'Satıcı'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon} onClick={toggleDropdown}>
        <MdOutlinePerson size={22} className={styles.figure} />
      </div>
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>

          <div className='d-flex d-flex-wrap d-flex-align-center w-100 border-bottom p-4'>
            <div className={styles.symbol}>
              <Image className='border-rounded-xl' src={profil.img} alt={profil.name} width={50} height={50} />
              
            </div>
              <div className='ml-2 w-50 d-flex d-flex-wrap d-flex-align-center'>
                {profil.name}
                <span className='badge badge-success ml-2'>{profil.state}</span>
                <a href={`mailto:${profil.mail}`} className={styles.mail}>{profil.mail}</a>
              </div>
          </div>

        <div className='w-100 border-bottom p-4'>
          <ProfilLinks />
        </div>
        <div className='w-100 p-4'>
           <Link href='#'>Çıkış Yap</Link>
        </div>
      </div>
    </div>
  );
};

export default Profil;
