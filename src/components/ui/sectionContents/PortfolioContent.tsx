'use client';
import React, { useState } from 'react';
import styles from './Content.module.scss';
import Link from 'next/link';
import { portfolios } from '@/data/contents/portfolio';
import { Link as Site } from 'lucide-react';
import Modal from '@component/modal/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const PortfolioContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image : string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <div className={styles.portfolio}>
        <Link className={styles.portfolio__git} href='https://github.com/dattko' target='_blank'>Go to git</Link>
        <span className={styles.portfolio__comment}>
          <span>Turning Ideas into Code,</span>
          <span>아이디어를 코드로,</span>
        </span>
        <span className={styles.portfolio__comment}>
          <span>Code into Reality,</span>
          <span>코드를 현실로</span>
        </span>
      </div>

      <div className={styles.portfolio}>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className={styles.portfolio__item}>
            <div className={styles.portfolio__image}>
              {portfolio.image.length > 1 ? (
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{ clickable: true }}
                >
                  {portfolio.image.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/images/${image}.png`}
                        alt={portfolio.title}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageClick(`/images/${image}.png`)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                  portfolio.image.length > 0 ? (
                    <img
                      src={`/images/${portfolio.image[0]}.png`}
                      alt={portfolio.title}
                      style={{ cursor: 'pointer', maxWidth: '100%' }}
                      onClick={() => handleImageClick(`/images/${portfolio.image[0]}.png`)}
                    />
                  ) : (
                    <img src='https://g-lep6tfc2q9.vusercontent.net/placeholder.svg?height=200&width=400' alt="placeholder" />
                  )
              )}
            </div>
            <div className={styles.portfolio__text}>
              <span className={styles.portfolio__title}>
                {portfolio.title}
                {portfolio.state === 'preparing' && <span className={styles.portfolio__state}> - 작업 중...</span>}
              </span>
              <span className={styles.portfolio__subtitle}>{portfolio.description}</span>
              <Link href={portfolio.link} target='_blank' className={styles.portfolio__link}>
                <Site size={16} /> 바로가기
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={selectedImage} />
    </>
  );
}

export default PortfolioContent;
