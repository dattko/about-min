'use client';
import React, { useEffect } from 'react';
import styles from './AlertModal.module.scss';

interface AlertModalProps {
  text: string;
  open: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ text, open, onClose }) => {

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.modal__wrap}>
      <div className={styles.modal__content}>
        {/* <button className={styles.modal__close} onClick={onClose}>
          <X size={16}/>
        </button> */}
        <h1 className={styles.modal__text}>{text}</h1>
      </div>
    </div>
  );
}

export default AlertModal;