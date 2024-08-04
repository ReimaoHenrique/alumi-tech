// pages/index.tsx
import { NextPage } from 'next';
import Carousel from '@/app/components/carousel-motion';
import CardInfo from '@/app/components/card-info/card-info';
import styles from './home.module.css'; // Importar o módulo CSS

const Home: NextPage = () => {
  const carouselItems = [
    {
      text: 'Texto 1',
      image: '/images/background-silver.png',
    },
    {
      text: 'isso é um alumínio',
      image: '/images/background-silver-alternative.png',
    },
    {
      text: 'Texto 3',
      image: '/images/cnc.png',
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.carouselContainer}>
        <Carousel items={carouselItems} />
      </div>
      <div>
        <h2 className={styles.specialTitle}>Como podemos te ajudar hoje ?</h2>
      </div>
      <h2 className={styles.title}>Serviços</h2>
      <div className={styles.solutions}>
        <CardInfo 
          title="Blindex" 
          description="Blindex de vidro temperado resistente e elegante " 
          link="/services/blindex" 
          backgroundImage="/images/casa-glass.jpeg" 
        />
        <CardInfo 
          title="Serviço 2" 
          description="Descrição do serviço 2" 
          link="https://www.google.com" 
          backgroundImage="/images/casa-glass.jpeg" 
        />
        <CardInfo 
          title="Serviço 3" 
          description="Descrição do serviço 3" 
          link="https://www.google.com" 
          backgroundImage="/images/casa-glass.jpeg" 
        />
        <CardInfo
          title="Portas e Janelas de Alumínio" 
          description="Descrição detalhada sobre portas e janelas de alumínio" 
          link="https://www.google.com" 
          backgroundImage="/images/casa-glass.jpeg" 
        />
      </div>
      <h2 className={styles.title}>Projeto laboratório</h2>
      <div className={styles.projectContainer}>
        <CardInfo 
          title="Outro título" 
          description="Outra descrição" 
          link="https://www.example.com" 
          backgroundImage="/images/casa-glass.jpeg" 
        />
      </div>
    </div>
  );
};

export default Home;
