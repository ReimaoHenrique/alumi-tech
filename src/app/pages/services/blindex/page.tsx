// pages/services.tsx
import { NextPage } from 'next';
import styles from './blindex.module.css'; // Importar o módulo CSS

const Services: NextPage = () => {
  // Mock data for evaluations
  const evaluations = [
    {
      name: 'Carlos Silva',
      rating: 5,
      text: 'O atendimento foi impecável e a qualidade do serviço superou minhas expectativas. Recomendo fortemente!',
      photo: '/images/banheiro-blindex.jpeg', // Caminho para a foto do cliente
    },
    {
      name: 'Ana Pereira',
      rating: 4,
      text: 'Serviço bem executado, com atenção aos detalhes. A equipe foi muito profissional.',
      photo: '/images/customer2.jpg',
    },
    {
      name: 'João Oliveira',
      rating: 3,
      text: 'O serviço atendeu o esperado, mas há espaço para melhorias na comunicação.',
      photo: '/images/customer3.jpg',
    },
  ];

  const galleryImages = [
    '/images/banheiro-blindex.jpeg',
    '/images/banheiro-blindex.jpeg',
    '/images/banheiro-blindex.jpeg',
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Serviço de Blindex</h1>
      <div className={styles.description}>
        <p>
          Oferecemos serviços especializados em instalação e manutenção de vidros Blindex. Nosso objetivo é garantir a segurança e a estética dos seus espaços com produtos de alta qualidade e um atendimento excepcional.
        </p>
      </div>
      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`Serviço ${index + 1}`} />
        ))}
      </div>
      <div className={styles.evaluations}>
        <h2 className={styles.title}>Avaliações de Clientes</h2>
        {evaluations.map((evaluation, index) => (
          <div key={index} className={styles.evaluationCard}>
            <img src={evaluation.photo} alt={evaluation.name} />
            <div className={styles.evaluationContent}>
              <div className={styles.rating}>
                {'★'.repeat(evaluation.rating) + '☆'.repeat(5 - evaluation.rating)}
              </div>
              <h3 className={styles.evaluationTitle}>{evaluation.name}</h3>
              <p className={styles.evaluationText}>{evaluation.text}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/contact" className={styles.ctaButton}>Entre em Contato</a>
    </div>
  );
};

export default Services;
