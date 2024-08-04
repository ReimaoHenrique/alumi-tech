import { FC } from 'react';
import CardAbout from '@/app/components/card-info/card-info';
import styles from './About.module.css'; // Arquivo de estilos para a página About

const About: FC = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre a alummiTech</h2>
      <div className={styles.content}>
        <CardAbout
          title="Quem Somos"
          description="A alummiTech é uma empresa dedicada à inovação e tecnologia, oferecendo soluções personalizadas."
          backgroundImage="/images/casa-glass-3.jpeg"
          link="/services/blindex"  
        
        />
        <CardAbout
          title="Missão"
          description="Transformar o mercado com tecnologias avançadas e serviços excepcionais."
          backgroundImage="/images/casa-glass.jpeg" 
        
        />
        <CardAbout
          title="Visão"
          description="Ser líderes em inovação tecnológica, reconhecidos pela excelência em nossos produtos."
          backgroundImage="/images/casa-glass-2.jpeg" 
        
        />
      </div>
    </div>
  );
};

export default About;
