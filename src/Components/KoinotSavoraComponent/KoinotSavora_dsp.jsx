import savorasuperapp from '../../assets/image/savorasuperapp.png';
import savorasuperapp2 from '../../assets/image/savorasuperapp2.png';
import savorasuperapp3 from '../../assets/image/savorasuperapp3.png';
import savorasuperapp4 from '../../assets/image/savorasuperapp4.png';
import savora_b2b from '../../assets/image/savora_b2b.png';
import savora_map from '../../assets/image/savora_map.png';

function Abouts_app() {

  return (
    <>
      <div className='savora__app'>
        <img src={savorasuperapp} alt="" />
        <img src={savorasuperapp2} alt="" />
        <img src={savorasuperapp3} alt="" />
        <img src={savorasuperapp4} alt="" />
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>
            Savora для бизнеса (B2B)
          </h1>
          <p>
            Обслуживание автопарков компаний и партнёров экосистемы Koinot:
            мойка, ТО и зарядка по единому договору, управление — в Koinot Super App.
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <h2>
            Savora для бизнеса
          </h2>
          <p>B2B</p>
          <p>
            Обслуживание автопарков компаний и партнёров экосистемы Koinot:
            мойка, ТО и зарядка по единому договору, управление — в Koinot Super App.
          </p>
          <button>
            Оставить заявку
            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3907_88193)">
                <path d="M28.9 10.3224L24.0625 6.24953C23.9463 6.1519 23.808 6.0744 23.6557 6.02152C23.5034 5.96863 23.34 5.94141 23.175 5.94141C23.01 5.94141 22.8466 5.96863 22.6943 6.02152C22.542 6.0744 22.4037 6.1519 22.2875 6.24953C22.0547 6.4447 21.924 6.70871 21.924 6.9839C21.924 7.2591 22.0547 7.52311 22.2875 7.71828L26.7375 11.4579H1.25C0.918479 11.4579 0.600537 11.5676 0.366117 11.763C0.131696 11.9583 0 12.2233 0 12.4995H0C0 12.7758 0.131696 13.0407 0.366117 13.2361C0.600537 13.4314 0.918479 13.5412 1.25 13.5412H26.8125L22.2875 17.3016C22.1703 17.3984 22.0773 17.5137 22.0139 17.6406C21.9504 17.7675 21.9178 17.9037 21.9178 18.0412C21.9178 18.1787 21.9504 18.3149 22.0139 18.4418C22.0773 18.5687 22.1703 18.6839 22.2875 18.7808C22.4037 18.8784 22.542 18.9559 22.6943 19.0088C22.8466 19.0617 23.01 19.0889 23.175 19.0889C23.34 19.0889 23.5034 19.0617 23.6557 19.0088C23.808 18.9559 23.9463 18.8784 24.0625 18.7808L28.9 14.7391C29.6023 14.1532 29.9967 13.3589 29.9967 12.5308C29.9967 11.7027 29.6023 10.9084 28.9 10.3224Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3907_88193">
                  <rect width="30" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <img
          src={savora_b2b}
          alt='savora_b2b'
        />
      </div>
      <div className='savora_location'>
        <h1>Где нас найти?</h1>
        <p>
          Комплекс расположен у дороги с удобным въездом и выездом. Маршрут и загрузку комплекса можно посмотреть в Koinot Super App.
        </p>
      </div>
      <img
      className='savora_map'
        src={savora_map}
        width='100%'
        alt='mapDC'
      />
    </>
  );
}

export default Abouts_app;