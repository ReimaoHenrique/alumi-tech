import { NextPage } from 'next';
import styles from './base.module.css'; // Importar o módulo CSS
import ClientCard from '@/app/components/client-card/client-card';

const Base: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Serviços</h1>
      <div className={styles.description}>
        <div>
        <ClientCard
        photoProfile="/images/banheiro-blindex.jpeg"
        name="John Doe"
        review="Excellent service!"
        star={4}
        photoService={[
          "/images/banheiro-blindex.jpeg",
          "/images/banheiro-blindex.jpeg",
          "/images/banheiro-blindex.jpeg"
        ]}
      />
        </div>
        <p>
          Oferecemos uma gama completa de serviços para atender às suas necessidades.
        </p>
      </div>
    </div>
  );
};

export default Base;
