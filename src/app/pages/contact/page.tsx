// src/app/pages/contact/page.tsx
import React from 'react';
import styles from '../contact/contact.module.css';
import Image from 'next/image';
import CardSimples from '@/app/components/Card-simples';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/contato-maquina.jpeg"
            alt="Contact Page Image"
            layout="fill"       // Preenche o contêiner
            objectFit="cover"   // Ajusta a imagem para cobrir o contêiner
            className={styles.image} // Aplica a classe de estilos para a imagem
            priority={true}     // Carrega a imagem de forma prioritária (opcional)
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
            <CardSimples
              title="Marcar orçamento"
              description="Uma descrição breve"
              buttonText="Marcar"
              buttonLink="https://www.google.com"
            />
            <CardSimples
              title="Tirar Duvidas"
              description="Uma descrição breve"
              buttonText="Chamar"
              buttonLink="https://www.google.com"
            />
          </div>
          <h2 className={styles.subtitle}>Feedback e Avaliações</h2>
          <div className={styles.cardContainer}>
            <CardSimples
              title="Feedback"
              description="Uma descrição breve"
              buttonText="Avalie "
              buttonLink="https://www.google.com"
            />
            <CardSimples
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
