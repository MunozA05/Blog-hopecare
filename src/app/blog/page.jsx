import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
            <Image
            src="/medi1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
            />
       </div>  
          <div className={styles.content}>
            <h1 className={styles.title}>Trabajando en equipo para la esperanza</h1>
            <p className={styles.desc}>En HopeCare, creemos que la colaboración entre médicos y especialistas es esencial para encontrar soluciones innovadoras para las enfermedades raras. Nuestro enfoque está en unir fuerzas para transformar la vida de los pacientes.</p>
          
          </div>
      </Link>  
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
            <Image
            src="/medi1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
            />
       </div>  
          <div className={styles.content}>
            <h1 className={styles.title}>Trabajando en equipo para la esperanza</h1>
            <p className={styles.desc}>En HopeCare, creemos que la colaboración entre médicos y especialistas es esencial para encontrar soluciones innovadoras para las enfermedades raras. Nuestro enfoque está en unir fuerzas para transformar la vida de los pacientes.</p>
          
          </div>
      </Link>   
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
            <Image
            src="/medi1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
            />
       </div>  
          <div className={styles.content}>
            <h1 className={styles.title}>Trabajando en equipo para la esperanza</h1>
            <p className={styles.desc}>En HopeCare, creemos que la colaboración entre médicos y especialistas es esencial para encontrar soluciones innovadoras para las enfermedades raras. Nuestro enfoque está en unir fuerzas para transformar la vida de los pacientes.</p>
          
          </div>
      </Link>
    </div>
  );
};

export default Blog