import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const Blogpost = async ({params}) => {
  const data =await getData (params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            <br />
            <br />
          En nuestro blog, encontrarás artículos, guías y recursos diseñados para apoyar a pacientes, médicos y cuidadores en el manejo de enfermedades raras. Desde los últimos avances médicos hasta consejos prácticos para el día a día, nuestro objetivo es inspirar, informar y fortalecer a nuestra comunidad. ¡Explora, aprende y comparte con HopeCare!
          <br />
          <br />
          </p>
          <div className={styles.autor}>
            <Image
              src="/munoza.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}

            />
            <span className={styles.username}>Alejandro Franco M.</span>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image
              src="/hope.png"
              alt=""
              fill={true}
              className={styles.image}

            />
          </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        1. Avances médicos y tecnológicos:
            Nos esforzamos por mantenerte informado sobre las últimas investigaciones, tratamientos y tecnologías relacionadas con las enfermedades raras. Desde terapias genéticas hasta herramientas digitales para el seguimiento médico, compartimos contenido basado en evidencia científica y respaldado por especialistas.
            <br />
            <br />
        2. Historias de vida y testimonios:
            Creemos en el poder de las historias personales. Nuestro blog destaca relatos inspiradores de pacientes, cuidadores y profesionales médicos, mostrando cómo la resiliencia y la esperanza pueden superar los momentos más difíciles. Estas historias te recordarán que no estás solo en este camino.
            <br />
            <br />
        3. Consejos prácticos y guías de cuidado:
            Desde cómo organizar citas médicas y entender los diagnósticos, hasta estrategias para el autocuidado y el manejo emocional, encontrarás guías prácticas que te ayudarán a enfrentar el día a día con confianza.
            <br />
            <br />
        4. Recursos educativos:
            Nuestra misión es empoderarte con conocimiento. Publicamos contenido educativo que abarca conceptos médicos, explicaciones sobre políticas de salud y recomendaciones para aprovechar al máximo las herramientas que HopeCare ofrece.
            <br />
            <br />
        5. Comunidad y apoyo:
            El blog es un punto de encuentro para nuestra comunidad, un lugar donde puedes encontrar apoyo y conexión con personas que comparten tus experiencias. Nuestro objetivo es crear un espacio seguro donde se fomente la empatía y el entendimiento mutuo.
            <br /><br />
        </p>

      </div>
    </div>
  );
};

export default Blogpost;