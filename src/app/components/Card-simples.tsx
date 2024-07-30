// components/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const CardSimples: React.FC<CardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <a href={buttonLink} style={styles.button}>
        {buttonText}
      </a>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #555',
    maxWidth: '300px',
    margin: '10px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#555',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default CardSimples;
