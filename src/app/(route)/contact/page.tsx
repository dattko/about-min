import React from 'react';
import Link from 'next/link';
import {  Linkedin, Mail, GitBranch, Smartphone } from 'lucide-react';
import Section from '@/components/ui/section/Section';
import styles from './Page.module.scss';
import EmailForm from '@/components/ui/sectionContents/email/EmailForm';
const Contact = () => {

  return (
    <Section main black>
      <div className={styles.contactContainer}>
        <div className={styles.intro}>
          <span className={styles.h2}>함께 일해볼까요?</span>
          <span>새로운 기회와 협업을 환영합니다. 언제든 연락 주세요!</span>
        </div>

        <div className={styles.contactMethods}>
             <Link href="https://github.com/dattko" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitBranch size={20} /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/dattko" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} /> LinkedIn
            </Link>
            {/* <Link href="mailto:jhwangmin@gmail.com" aria-label="Email">
              <Mail size={20} /> Mail
            </Link> */}
            <Link href="sms:01055611680" aria-label="sms">
              <Smartphone size={20} /> sms
            </Link>
        </div>

        <div className={styles.text} >
          <span>* 이메일로 연락주시면 가장 빠르게 답변 드릴 수 있습니다.</span>
        </div>
        <EmailForm />

      </div>
    </Section>
  );
};

export default Contact;