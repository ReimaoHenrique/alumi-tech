// src/app/pages/contact/page.tsx
import React from 'react';
import styles from '../contact/contact.module.css';
import Image from 'next/image';
import SimpleCard from '@/app/components/simple-card/SimpleCard';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/contato-maquina.jpeg"
            alt="Contact Page Image"
            layout="fill"
            objectFit="cover"
            className={styles.image}
            priority={true}
          />
          <div className={styles.textOverlay}>
            Como você prefere falar com a gente?
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Contato</h1>
          <p className={styles.description}>
            Esta é a página de contato. Insira aqui as informações de contato relevantes.
          </p>
          <h2 className={styles.subtitle}>Suporte Online</h2>
          <div className={styles.cardContainer}>
            <SimpleCard
              title="Marcar orçamento"
              description="Uma descrição breve"
              buttonText="Marcar"
              buttonLink="https://www.google.com"
            />
            <SimpleCard
              title="Tirar Duvidas"
              description="Uma descrição breve"
              buttonText="Chamar"
              buttonLink="https://www.google.com"
            />
          </div>
          <h2 className={styles.subtitle}>Feedback e Avaliações</h2>
          <div className={styles.cardContainer}>
            <SimpleCard
              title="Feedback"
              description="Uma descrição breve"
              buttonText="Avalie"
              buttonLink="https://www.google.com"
            />
            <SimpleCard
              title="Avaliações"
              description="Uma descrição breve"
              buttonText="Avalie"
              buttonLink="https://www.google.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
