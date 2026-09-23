import { useState } from 'react';
import Closets from '../../assets/image/Closets.png';
import mapDc from '../../assets/image/mapDc.png';
import Bigcloset from '../../assets/image/Bigcloset.png';
import Closet from '../../assets/image/Closet.png';
import ClosetTwo from '../../assets/image/ClosetTwo.png';
import ClosetThree from '../../assets/image/ClosetThree.png';
import ClosetFour from '../../assets/image/ClosetFour.png';

function Abouts_app() {
  const images = [
    Closet,
    ClosetTwo,
    ClosetThree,
    ClosetFour
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <p>
            Swappin — это сеть специальных шкафов для замены аккумуляторов,
            расположенных в ключевых точках города. Больше не нужно ждать,
            пока батарея зарядится, — просто подъезжайте к ближайшему шкафу
            Swappin, замените разряженный аккумулятор на полностью заряженный
            и продолжайте работу.
          </p>
          <div className='scooter_carusel'>
            <div className='scooter_carusel__image'>
              <img
                src={images[currentIndex]}
                alt=''
              />
            </div>
            <div className='scooter_carusel__controls'>
              <button
                className='scooter_carusel__arrow scooter_carusel__arrow_left'
                onClick={prevSlide}
              >
                <span>
                  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3489 24.0002C10.2173 24.0009 10.0869 23.9757 9.96503 23.9259C9.84319 23.8762 9.73238 23.8028 9.63894 23.7102L1.46894 15.5402C1.00331 15.0757 0.633877 14.524 0.381813 13.9165C0.129748 13.3091 0 12.6578 0 12.0002C0 11.3425 0.129748 10.6913 0.381813 10.0838C0.633877 9.47639 1.00331 8.92463 1.46894 8.46017L9.63894 0.290185C9.73218 0.196947 9.84287 0.122986 9.96469 0.0725256C10.0865 0.0220653 10.2171 -0.00390625 10.3489 -0.00390625C10.4808 -0.00390625 10.6114 0.0220653 10.7332 0.0725256C10.855 0.122986 10.9657 0.196947 11.0589 0.290185C11.1522 0.383423 11.2261 0.494114 11.2766 0.615935C11.3271 0.737757 11.353 0.868325 11.353 1.00018C11.353 1.13204 11.3271 1.26261 11.2766 1.38443C11.2261 1.50625 11.1522 1.61694 11.0589 1.71018L2.88894 9.88017C2.32714 10.4427 2.01158 11.2052 2.01158 12.0002C2.01158 12.7952 2.32714 13.5577 2.88894 14.1202L11.0589 22.2902C11.1527 22.3831 11.2271 22.4937 11.2778 22.6156C11.3286 22.7374 11.3547 22.8681 11.3547 23.0002C11.3547 23.1322 11.3286 23.2629 11.2778 23.3847C11.2271 23.5066 11.1527 23.6172 11.0589 23.7102C10.9655 23.8028 10.8547 23.8762 10.7328 23.9259C10.611 23.9757 10.4805 24.0009 10.3489 24.0002Z" fill="#374957" />
                  </svg>

                </span>
              </button>
              <div className='scooter_carusel__dots'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentIndex === index
                        ? 'scooter_carusel__dot scooter_carusel__dot_active'
                        : 'scooter_carusel__dot'
                    }
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <button
                className='scooter_carusel__arrow scooter_carusel__arrow_right'
                onClick={nextSlide}
              >
                <span>
                  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0058 24.0002C0.874192 24.0009 0.743729 23.9757 0.621892 23.9259C0.500054 23.8762 0.389238 23.8028 0.295798 23.7102C0.20207 23.6172 0.127676 23.5066 0.0769072 23.3847C0.0261385 23.2629 0 23.1322 0 23.0002C0 22.8681 0.0261385 22.7374 0.0769072 22.6156C0.127676 22.4937 0.20207 22.3831 0.295798 22.2902L8.4658 14.1202C9.0276 13.5577 9.34316 12.7952 9.34316 12.0002C9.34316 11.2052 9.0276 10.4427 8.4658 9.88017L0.295798 1.71018C0.107495 1.52188 0.0017066 1.26649 0.0017066 1.00018C0.0017066 0.733883 0.107495 0.478489 0.295798 0.290185C0.484102 0.101882 0.739497 -0.00390625 1.0058 -0.00390625C1.2721 -0.00390625 1.52749 0.101882 1.7158 0.290185L9.8858 8.46017C10.3514 8.92463 10.7209 9.47639 10.9729 10.0838C11.225 10.6913 11.3547 11.3425 11.3547 12.0002C11.3547 12.6578 11.225 13.3091 10.9729 13.9165C10.7209 14.524 10.3514 15.0757 9.8858 15.5402L1.7158 23.7102C1.62236 23.8028 1.51154 23.8762 1.3897 23.9259C1.26787 23.9757 1.1374 24.0009 1.0058 24.0002Z" fill="#374957" />
                  </svg>

                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          src={Closets}
          alt=''
        />
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>
            Koinot Rason B2B решение для бизнеса
          </h1>
          <p>
            Сеть постаматов с консьерж-сервисом для e-com партнёров
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <h1>
            Сеть постаматов по всему городу
          </h1>
          <p>
            Для партнёров, работающих в сегменте e-commerce,
            Koinot Rason развивает собственную сеть постаматов.
            Это удобный способ получения и отправки заказов без
            привязки к времени работы курьера — клиенты забирают
            посылки в удобной локации в любое время.
          </p>
          <p>
            Это делает Koinot Rason незаметной, но незаменимой частью
            повседневного пользовательского опыта:
            заказ оформлен — курьер уже в пути.
          </p>
        </div>
        <img
          src={Bigcloset}
          alt=''
        />
      </div>
      <img
        src={mapDc}
        width='100%'
        alt=''
      />
    </>
  );
}

export default Abouts_app;