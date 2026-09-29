import { useState } from 'react';
import map_global from '../../assets/image/map_global.png';
import Bigcloset from '../../assets/image/Bigcloset.png';
import pinduoduoPhone from '../../assets/image/pinduoduoPhone.png';
import pays_duston from '../../assets/image/pays_duston.png';
import phonesDuston from '../../assets/image/phonesDuston.png';
import closetPhone from '../../assets/image/closetPhone.png';
import koinot_fabruary from '../../assets/image/koinot_fabruary.png';

function Abouts_app() {

  return (
    <>
      <div className='globals_wrapper'>
        <p>
          Клиент выбирает товар в Koinot Super App, а Koinot Global берёт на себя всё остальное.
           Международную доставку выполняет Koinot Cargo,
          а готовый заказ ждёт клиента в ближайшем постомате Koinot Rason.
        </p>
        <h1>Как это работает:</h1>
        <div className='global__apps'>
          <div className='global_phones'>
            <div className='global_flex'>
              <div className='global__title'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E1251B" />
                  <path d="M17.767 10.3636V22H15.6591V12.4148H15.5909L12.8693 14.1534V12.2216L15.7614 10.3636H17.767Z" fill="white" />
                </svg>
                <div className='global__titles'>
                  <h1>Найдите товар</h1>
                  <p>
                    Поиск на русском по четырём площадкам или ссылка с сайта маркетплейса
                  </p>
                </div>
              </div>
              <img src={pinduoduoPhone} alt="" />
            </div>
          </div>
          <div className='global_phones'>
            <div className='global_flex'>
              <div className='global__title'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E1251B" />
                  <path d="M12.0341 22V20.4773L16.0739 16.517C16.4602 16.1269 16.7822 15.7803 17.0398 15.4773C17.2973 15.1742 17.4905 14.8807 17.6193 14.5966C17.7481 14.3125 17.8125 14.0095 17.8125 13.6875C17.8125 13.3201 17.7292 13.0057 17.5625 12.7443C17.3958 12.4792 17.1667 12.2746 16.875 12.1307C16.5833 11.9867 16.2519 11.9148 15.8807 11.9148C15.4981 11.9148 15.1629 11.9943 14.875 12.1534C14.5871 12.3087 14.3636 12.5303 14.2045 12.8182C14.0492 13.1061 13.9716 13.4489 13.9716 13.8466H11.9659C11.9659 13.108 12.1345 12.4659 12.4716 11.9205C12.8087 11.375 13.2727 10.9527 13.8636 10.6534C14.4583 10.3542 15.1402 10.2045 15.9091 10.2045C16.6894 10.2045 17.375 10.3504 17.9659 10.642C18.5568 10.9337 19.0152 11.3333 19.3409 11.8409C19.6705 12.3485 19.8352 12.928 19.8352 13.5795C19.8352 14.0152 19.7519 14.4432 19.5852 14.8636C19.4186 15.2841 19.125 15.75 18.7045 16.2614C18.2879 16.7727 17.7027 17.392 16.9489 18.1193L14.9432 20.1591V20.2386H20.0114V22H12.0341Z" fill="white" />
                </svg>
                <div className='global__titles'>
                  <h1>Оплатите в сомони</h1>
                  <p>
                    Итоговая цена с доставкой видна до оплаты — картой или через Duston
                  </p>
                </div>
              </div>
              <img src={pays_duston} alt="" />
            </div>
          </div>
          <div className='global_phones'>
            <div className='global_flex'>
              <div className='global__title'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E1251B" />
                  <path d="M15.7102 22.1591C14.892 22.1591 14.1648 22.0189 13.5284 21.7386C12.8958 21.4583 12.3958 21.0682 12.0284 20.5682C11.661 20.0682 11.4659 19.4905 11.4432 18.8352H13.5795C13.5985 19.1496 13.7027 19.4242 13.892 19.6591C14.0814 19.8902 14.3333 20.0701 14.6477 20.1989C14.9621 20.3277 15.3144 20.392 15.7045 20.392C16.1212 20.392 16.4905 20.3201 16.8125 20.1761C17.1345 20.0284 17.3864 19.8239 17.5682 19.5625C17.75 19.3011 17.839 19 17.8352 18.6591C17.839 18.3068 17.7481 17.9962 17.5625 17.7273C17.3769 17.4583 17.108 17.2481 16.7557 17.0966C16.4072 16.9451 15.9867 16.8693 15.4943 16.8693H14.4659V15.2443H15.4943C15.8996 15.2443 16.2538 15.1742 16.5568 15.0341C16.8636 14.8939 17.1042 14.697 17.2784 14.4432C17.4527 14.1856 17.5379 13.8883 17.5341 13.5511C17.5379 13.2216 17.464 12.9356 17.3125 12.6932C17.1648 12.447 16.9545 12.2557 16.6818 12.1193C16.4129 11.983 16.0966 11.9148 15.733 11.9148C15.3769 11.9148 15.0473 11.9792 14.7443 12.108C14.4413 12.2367 14.197 12.4205 14.0114 12.6591C13.8258 12.8939 13.7273 13.1742 13.7159 13.5H11.6875C11.7027 12.8485 11.8902 12.2765 12.25 11.7841C12.6136 11.2879 13.0985 10.9015 13.7045 10.625C14.3106 10.3447 14.9905 10.2045 15.7443 10.2045C16.5208 10.2045 17.1951 10.3504 17.767 10.642C18.3428 10.9299 18.7879 11.3182 19.1023 11.8068C19.4167 12.2955 19.5739 12.8352 19.5739 13.4261C19.5777 14.0814 19.3845 14.6307 18.9943 15.0739C18.608 15.517 18.1004 15.8068 17.4716 15.9432V16.0341C18.2898 16.1477 18.9167 16.4508 19.3523 16.9432C19.7917 17.4318 20.0095 18.0398 20.0057 18.767C20.0057 19.4186 19.8201 20.0019 19.4489 20.517C19.0814 21.0284 18.5739 21.4299 17.9261 21.7216C17.2822 22.0133 16.5436 22.1591 15.7102 22.1591Z" fill="white" />
                </svg>
                <div className='global__titles'>
                  <h1>Мы выкупим и проверим</h1>
                  <p>
                    Склад в Китае принимает заказ, проверяет и присылает фотоотчёт
                  </p>
                </div>
              </div>
              <img src={phonesDuston} alt="" />
            </div>
          </div>
          <div className='global_phones'>
            <div className='global_flex'>
              <div className='global__title'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E1251B" />
                  <path d="M11.3239 19.8409V18.1648L16.2614 10.3636H17.6591V12.75H16.8068L13.483 18.017V18.108H20.375V19.8409H11.3239ZM16.875 22V19.3295L16.8977 18.5795V10.3636H18.8864V22H16.875Z" fill="white" />
                </svg>

                <div className='global__titles'>
                  <h1>Заберите заказ</h1>
                  <p>
                    В ближайшем постомате Koinot Rason — в любое удобное время
                  </p>
                </div>
              </div>
              <img src={closetPhone} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>
            Получение заказов — сеть постоматов Koinot Rason
          </h1>
          <p>
            B2C-клиенты забирают свои покупки из Koinot Global в постоматах Koinot Rason по всему городу.
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <h1>
            Постоматы по всему городу
          </h1>
          <p>
            Заказ с зарубежного маркетплейса приходит в ближайший постомат Koinot Rason.
            Клиенту не нужно ждать курьера — посылку можно забрать в удобное время без привязки к графику доставки.
          </p>
        </div>
        <img
          src={Bigcloset}
          alt=''
        />
      </div>
      <img
      className='map__global'
        src={map_global}
        width='100%'
        alt='map_global'
      />
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>
            Koinot Global — решения для бизнеса
          </h1>
          <p>
            Закупки с 1688 для предпринимателей и партнёров экосистемы
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <h2>
            Оптовые закупки напрямую у производителей
          </h2>
          <p>
            Для магазинов, HoReCa и e-commerce партнёров Koinot Global организует закупки партиями с 1688:
            подбор поставщика, выкуп, консолидацию грузов и доставку через Koinot Cargo.
          </p>
          <h2>
            Получение на складе Koinot Cargo
          </h2>
          <p>
            Клиенты B2B-направления забирают свои заказы на складе Koinot Cargo.
          </p>
          <p className='globals_span'>
            [Адрес и часы работы склада]
          </p>
          <p className='globals_span'>
            [Условия для бизнеса: минимальная партия, сроки, комиссия]
          </p>
        </div>
        <img
          src={koinot_fabruary}
          alt=''
        />
      </div>
    </>
  );
}

export default Abouts_app;