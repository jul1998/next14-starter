import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
   <div className={styles.container}>
    <div className={styles.logo}></div>
    <div className={styles.text}>
      <p>© 2021 Next14 Starter. All rights reserved.</p>
    </div>
   </div>
  )
}

export default Footer