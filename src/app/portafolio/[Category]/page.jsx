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
          <h1 className={styles.title}>Trabajando en equipo para la esperanza</h1>
          <p className={styles.desc}>En HopeCare, creemos que la colaboración entre médicos y especialistas es esencial para encontrar soluciones innovadoras para las enfermedades raras. Nuestro enfoque está en unir fuerzas para transformar la vida de los pacientes.</p>
          <Button text="Ver Mas" url="#"/>
        </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src="/medi1.png"
            fill={true}
            alt=""
            />
          </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Cuidando cada detalle de tu salud</h1>
          <p className={styles.desc}>En HopeCare, entendemos la importancia de la atención personalizada. Nos enfocamos en escuchar, comprender y brindar apoyo a cada paciente, asegurándonos de que reciban el cuidado que merecen.</p>
          <Button text="Ver Mas" url="#"/>
        </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src="/medi2.png"
            fill={true}
            alt=""
            />
          </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Innovación al servicio de la salud</h1>
          <p className={styles.desc}>HopeCare trabaja en la intersección de la ciencia y la tecnología, reuniendo a expertos para desarrollar soluciones innovadoras. Nuestra meta es liderar avances en el cuidado de enfermedades raras, mejorando la calidad de vida de nuestros pacientes.</p>
          <Button text="Ver Mas" url="#"/>
        </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src="/medi3.png"
            fill={true}
            alt=""
            />
          </div>
      </div>
    </div>
    
  );
};

export default Category;