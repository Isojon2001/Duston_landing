import Logocofee from '../../assets/image/Logocofee.png';
import Build from '../../assets/image/Build.png';
import СupCoffe from '../../assets/image/СupCoffe.png';
import LigthingCoffe from '../../assets/image/LigthingCoffe.png';
import Marker from '../../assets/image/Marker.png';

function Abouts_info() {
  return (
    <>
      <div className='abouts__info'>
        <div className='abouts__title'>
          <h1>Мой любмый кофе теперь ближе</h1>
          <p>Кофе который движет тебя</p>
          <p>Luckin Coffee — любимый кофе теперь ещё ближе. Выбирайте напиток в Koinot Super App, оформляйте заказ за несколько минут и забирайте его в ближайшей кофейне. Быстро, удобно и без лишнего ожидания..
          </p>
          <button>
            Сайт Проекта
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className='abouts__images'>
          <img src={Logocofee} className='main__images-1' alt='images-tjk' />
        </div>
      </div>
      <div className='abouts__dsp abouts_bg'>
        <div className='abouts__items'>
          <div className='abouts__item'>
            <img src={СupCoffe} />
            <div>
              <h1>Качественны кофе</h1>
              <p>любимый ещё ближе вас</p>
            </div>
          </div>
          <div className='abouts__item'>
            <img src={LigthingCoffe} />
            <div>
              <h1>Быстро и удобно</h1>
              <p>Заказ за несколько кликов</p>
            </div>
          </div>
          <div className='abouts__item'>
            <img src={Marker} />
            <div>
              <h1>Рядом с вами</h1>
              <p>Кофейня по всему Душанбе</p>
            </div>
          </div>
        </div>
      </div>
      <div className='abouts__scooter abouts__coffee'>
        <div>
          <div className='abouts__coffe'>
            <h1>Наши форматы кофейн</h1>
            <p>Luckin Coffee — это разные форматы, чтобы быть ближе к вам в городе, на работе и в пути.</p>
          </div>
          <div className='scooter__title'>
            <h1>Pick-up Store</h1>
            <p>Быстро и с собой</p>
            <p>
              Закажите и оплатите через Koinot Super App или терминал. Заберите готовый напиток по QR-коду — без очередей и ожидания.
            </p>
          </div>
        </div>
        <img src={Build} />
      </div>
    </>
  )
}
export default Abouts_info