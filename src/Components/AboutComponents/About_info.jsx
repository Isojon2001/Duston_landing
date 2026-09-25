import myImage from '../../assets/image/Logo_K.png';
import qwatt_phone from '../../assets/image/qwatt_phone.png';
import qwatt_phone1 from '../../assets/image/qwatt_phone1.png';
import qwatt_phone2 from '../../assets/image/qwatt_phone2.png';
import qwatt_phone3 from '../../assets/image/qwatt_phone3.png';
function About_info() {
  return (
    <>
      <div className='about__info'>
        <div className='about__title'>
          <h1>Заряжайся по всему городу</h1>
          <p>Koinot Qwatt</p>
          <p>Заряд всегда рядом</p>
          <p>
            Koinot Qwatt - сеть аренды портативных зарядных устройств
            в шаговой доступности. Разряженный телефон больше не повод
            прерывать день: возьмите powerbank на ближайшей станцией,
            зарядите устройство на ходу и верните аккумулятор в любой
            другой точки сети.
          </p>
          <button>
            Сайт Проекта
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className='about__images'>
          <img src={myImage} className='main__images-1' alt='images-tjk' />
        </div>
      </div>
      <div className='about__dsp'>
        <div className='dsp__title'>
          <h1>Описание Проекта</h1>
          <p>
            Koinot Qwatt — часть экосистемы Koinot,
            созданной для того, чтобы быть рядом с вами в любой момент дня.
          </p>
        </div>
      </div>
      <div className='about__qwatt'>
        <div className='qwatt__title'>
          <h1>Как это работает</h1>
          <h1>4 шага и у вам есть заряд на целый день</h1>
        </div>
        <div className='qwatt__subtitle'>
          <p>Арендуйте пауэрбанк за несколько секунд — найдите ближайшую станцию в Koinot Super App,
            отсканируйте QR-код и оставайтесь на связи, где бы вы ни были.</p>
          <div className='qwatt__subtitle_phone'>
            <img src={qwatt_phone} />
            <img src={qwatt_phone1} />
            <img src={qwatt_phone2} />
            <img src={qwatt_phone3} />
          </div>
        </div>
      </div>
    </>
  )
}
export default About_info