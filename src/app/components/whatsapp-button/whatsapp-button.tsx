"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=557193185031&text=Gostaria de solicitar um orçamento "
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <motion.div
        className={styles['button-container']}
        whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }} // Animação ao passar o mouse
        whileTap={{ scale: 0.95, backgroundColor: '#ffffff', color: '#000000' }} // Animação ao clicar
        initial={{ backgroundColor: '#34B7F1', color: '#ffffff' }} // Cor inicial
        animate={{ backgroundColor: '#34B7F1', color: '#ffffff' }} // Cor de fundo animada
        transition={{ duration: 0.3 }} // Duração da transição
      >
        <div className={styles['icon-container']}>
          <Image
            src="/images/whatsapp-icon.svg"
            alt="WhatsApp Icon"
            width={42} // Defina a largura desejada
            height={42} // Defina a altura desejada
          />
        </div>
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;
