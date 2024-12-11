import { Swiper, SwiperSlide } from 'swiper/react';
import scss from './MainPage.module.scss';

import './styles.css';
import { cardsImages } from '@/shared/images/cards';

export const MainPage = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
      >
        {cardsImages.map((image) => (
          <img src={image} alt="Новогодняя картинка" className={scss.image} />
        ))}
      </Swiper>
    </>
  );
}
