import React from 'react';
import Logo from '../../molecules/Navbar/Logo';
import Navbar from '../../molecules/Navbar';
import Toolbar from '../../molecules/Toolbar';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className='container bg-white'>
      <div className='wrapper wrapper-xl'>
        <div className={styles.inner}>
          <Navbar />
          <Toolbar />
        </div>
      </div>
    </div>

  );
}

export default Header;
