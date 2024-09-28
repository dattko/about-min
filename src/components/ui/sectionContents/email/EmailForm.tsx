'use client';
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './EmailForm.module.scss';
import { sendContactEmail } from '@/lib/contact';
import AlertModal from '@/components/modal/alert/AlertModal';

const initialState = {
  title: '',
  message: ''
}

const EmailForm = () => {
  const [message, setMessage] = useState(initialState);
  const [modalState, setModalState] = useState({ open: false, text: '' });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendContactEmail(message);
      setMessage(initialState);
      setModalState({ open: true, text: '전송을 완료 하였습니다.' });
    } catch (err) {
      setModalState({ open: true, text: '전송에 실패 하였습니다.' });
    }
  };

  const closeModal = () => {
    setModalState({ ...modalState, open: false });
  };
  
  return (
    <>
      <form className={styles.messageForm} onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='회사명, 제목 등' 
          name='title' 
          value={message.title} 
          onChange={onChange}
          required
        />
        <textarea 
          placeholder="간단한 메시지를 남겨주세요. 곧 연락 드리겠습니다!"
          name='message'
          value={message.message}
          required
          onChange={onChange}
        />
        <button type="submit">
          <Send size={16} /> 메세지 보내기
        </button>
      </form>
      <AlertModal text={modalState.text} open={modalState.open} onClose={closeModal} />
    </>
  );
}

export default EmailForm;