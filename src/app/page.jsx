import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          HOPE CARE Para el cuidado de tu salud.
        </h1>
        <p className={styles.desc}>
        En HopeCare, nuestra misión es brindar apoyo,
        conocimiento y soluciones para las personas que viven con enfermedades raras y sus familias.
        </p>
        <Button url="/portafolio" text="Mira nuestro trabajo" />

      </div>
      <div className={styles.item}>
        <img src="/hope.png" alt="" className={styles.img} />
      </div>
    </div>
  )
}
