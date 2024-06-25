import React from 'react'
import Search from './Search'
import QuickLinks from './QuickLinks'

import styles from './toolbar.module.scss'
import Notifications from './Notifications'
import Messages from './Messages/Messages'
import Profil from './Profil'

const Toolbar = () => {
  return (
    <div className={styles.inner}>
      <Search />
      <QuickLinks />
      <Notifications />
      <Messages />
      <Profil />
    </div>
  )
}

export default Toolbar