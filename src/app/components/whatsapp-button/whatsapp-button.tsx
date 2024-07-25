"use client"
// components/WhatsAppButton.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=SEUNUMERODOTELEFONE"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-10 flex items-center"
    >
      <motion.div
        className={`${styles['button-container']} bg-green-500 text-white py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center`}
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
            width={24} // Defina a largura desejada
            height={24} // Defina a altura desejada
          />
        </div>
        <span className={styles['button-text']}>Contato via WhatsApp</span>
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;
