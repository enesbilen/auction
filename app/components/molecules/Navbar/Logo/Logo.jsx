import React from 'react'
import Image from 'next/image'
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.inner}>
      <Image src='metronicLogo.svg' alt='Logo' width={180} height={50}/>
    </div>
  )
}

export default Logo