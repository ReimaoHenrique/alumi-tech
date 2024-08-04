'use client';

import { FC } from 'react';
import Link from 'next/link';
import styles from './cardInfo.module.css';

interface CardAboutProps {
  title: string;
  description: string;
  backgroundImage: string;
  link?: string; // Parâmetro opcional para o link
}

const CardInfo: FC<CardAboutProps> = ({ title, description, backgroundImage, link }) => {
  // Conteúdo do cartão
  const cardContent = (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );

  // Se o link for fornecido, usar o componente Link do Next.js
  if (link) {
    return <Link href={link} className={styles.link}>{cardContent}</Link>;
  }

  // Caso contrário, apenas renderizar o conteúdo
  return <>{cardContent}</>;
};

export default CardInfo;
