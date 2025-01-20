import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/About.png" fill={true} alt="" 
        className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Nuestro compromiso</h1>
          <h2 className={styles.imgDesc}>¡Explora nuestra plataforma y descubre cómo podemos ayudarte hoy!</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>¿Qué hacemos?</h1>
          <p className={styles.desc}>
          HopeCare es una plataforma diseñada para conectar a pacientes, médicos y cuidadores en un espacio dedicado al manejo integral de enfermedades huérfanas. Desde el seguimiento médico personalizado hasta recursos educativos y herramientas de gestión, estamos aquí para acompañarte en cada paso del camino.
          <br />
          <br />
          En HopeCare, nuestra misión es brindar apoyo, conocimiento y soluciones para las personas que viven con enfermedades raras y sus familias. Creemos en el poder de la empatía, la innovación y la colaboración para transformar vidas.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Tu esperanza, nuestra inspiración.</h1>
        <p className={styles.desc}>
        En HopeCare, entendemos que cada historia cuenta. Nos esforzamos por ofrecer una atención que inspire confianza y esperanza, trabajando juntos para construir un futuro mejor para quienes enfrentan desafíos extraordinarios.
        <br />
        <br />
        Atención personalizada: Una experiencia adaptada a tus necesidades únicas.
        <br />
        <br />
        Conexión significativa: Recursos y herramientas para conectar con especialistas y comunidades.
        <br />
        <br />
        Empoderamiento: Información confiable para que tomes decisiones informadas sobre tu salud.
        </p>
        <Button url="/contact" text="Contact" />
        </div>
      </div>  
    </div>
  )
}

export default About