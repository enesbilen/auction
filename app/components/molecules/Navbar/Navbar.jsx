import React from 'react'
import Logo from './Logo'
import Links from './Links'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.inner}>
      <Logo />
      <Links />
    </div>
  )
}

export default Navbar