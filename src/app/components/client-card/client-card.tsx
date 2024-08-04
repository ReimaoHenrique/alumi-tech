"use client"; // Certifique-se de que esta linha está no início do arquivo

import { useState } from 'react'; // Verifique se esta linha aparece apenas uma vez
import { motion } from 'framer-motion';
import styles from './ClientCard.module.css';

interface ClientCardProps {
  photoProfile?: string;
  name: string;
  review: string;
  star: number;
  photoService: string[];
}

const ClientCard: React.FC<ClientCardProps> = ({ photoProfile, name, review, star, photoService }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);

  const handleClick = () => setIsExpanded(!isExpanded);

  const handlePhotoClick = (photo: string) => {
    setFullscreenPhoto(photo);
  };

  const handleFullscreenClick = () => {
    setFullscreenPhoto(null);
  };

  return (
    <>
      {isExpanded && <div className={styles.cardOverlay} onClick={handleClick} />}
      {fullscreenPhoto && (
        <div className={styles.fullscreenPhoto} onClick={handleFullscreenClick}>
          <img src={fullscreenPhoto} alt="Fullscreen" />
        </div>
      )}
      <motion.div
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
        onClick={handleClick}
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.1 : 1 }} // Ajustar o escalonamento para não ser tão grande
      >
        <div className={styles.cardHeader}>
          {photoProfile && <img src={photoProfile} alt="Profile" className={styles.cardProfileImage} />}
          <div>
            <div className={styles.cardTitle}>{name}</div>
            <div className={styles.cardReview}>{review}</div>
            <div className={styles.cardStars}>
              {'★'.repeat(star)}{'☆'.repeat(5 - star)}
            </div>
          </div>
        </div>
        <div className={styles.cardAdditionalPhotos}>
          {photoService.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Service ${index}`}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ClientCard;
