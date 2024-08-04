// src/app/components/simple-card/SimpleCard.tsx
import React from 'react';
import styles from './simple-card.module.css';

interface SimpleCardProps {
  buttonLink: string;
  title: string;
  description: string;
  buttonText: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ buttonLink, title, description, buttonText }) => {
  return (
    <a href={buttonLink} className={styles.card} target="_blank" rel="noopener noreferrer">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>{buttonText}</button>
    </a>
  );
};

export default SimpleCard;
