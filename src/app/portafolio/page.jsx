import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


const Portafolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Nuestros Metodos</h1>
      <div className={styles.items}>
        <Link href="/portafolio/medicos" className={styles.item}>
          <span className={styles.title}>Medicos</span>
        </Link>
        <Link href="/portafolio/clinicas" className={styles.item}>
          <span className={styles.title}>Clinicas</span>
        </Link>
        <Link href="/portafolio/application" className={styles.item}>
          <span className={styles.title}>Aplicación</span>
        </Link>

      </div>
    </div>
  );
};

export default Portafolio;