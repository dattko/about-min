// Modal.js
'use client';
import React from 'react';
import styles from './Image.module.scss'; 
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged" className={styles.modalImage} />
      </div>
        <button className={styles.modal__close} onClick={onClose}>
          <X size={24} />
        </button>
    </div>
  );
};

export default Modal;
