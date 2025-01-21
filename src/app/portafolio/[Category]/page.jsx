import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';


const Category = ({params}) => {
  console.log(params);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="Ver Mas" url="#"/>
        </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src="/medicos.png"
            fill={true}
            alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default Category;