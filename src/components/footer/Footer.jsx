import React from 'react'
import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2025 Hope Care. All rights reserved. </div>
        <div className={styles.social}>
          <img src="/facebook.png" width={15} height={15} className={styles.icon} alt="Hope Dev facebook" />
          <img src="/instagram.png" width={15} height={15} className={styles.icon} alt="Hope Dev instagram" />
          <img src="/whatsapp.png" width={15} height={15} className={styles.icon} alt="Hope Dev whatsapp" />
          
        </div>
    </div>
  )
}

export default Footer