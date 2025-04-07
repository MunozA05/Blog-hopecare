import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
   cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}

const Blog = async () => {

  const data =await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=> (
      <Link href="/blog/testId" className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>En HopeCare, creemos que la colaboración entre médicos y especialistas es esencial para encontrar soluciones innovadoras para las enfermedades raras. Nuestro enfoque está en unir fuerzas para transformar la vida de los pacientes.</p>
          
          </div>
      </Link>  
      ))}
    </div>
  );
};

export default Blog