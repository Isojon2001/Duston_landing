import myImage from '../../assets/image/a_clean_studio_style_product_logo_render_on_a_tran 1.png';
import Scooter from '../../assets/image/scooter.png';
function LandingPage_info() {
  return (
    <>
    <div className='LandingPage__info'>
            <div className='LandingPage__title'>
              <h1>Доставка нового уровня</h1>
              <p>Мы развиваем диверсифицированный портфель бизнесов
                в разных отраслях — от цифровых сервисов до розничной сети и логистики.
                Каждое направление объединяет Koinot Rason объединяет все виды доставки внутри одной операционной системы.
                Это логистический фундамент, на котором строится вся экосистема Koinot: подход, технологичность и фокус на качестве.
              </p>
              <button>
                Сайт Проекта
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className='LandingPage__images'>
              <img src={myImage} className='main__images-1' alt='images-tjk' />
            </div>
          </div>
          <div className='LandingPage__dsp'>
            <div className='dsp__title'>
              <h1>Описание Проекта</h1>
              <p>Koinot Rason работает в четырёх форматах которые весь
                диапазон логистический задач - от городской доставки еды до грузовых перевозок</p>
            </div>
          </div>
          <div className='LandingPage__scooter'>
            <div className='scooter__title'>
              <h1>Скутер - до 50 кг</h1>
              <p>Быстрая городская доставка для небольших заказов:
                еда, покупки, документы, посылки.
                Оптимальна для плотной городской застройки и коротких дистанций,
                где важна скорость</p>
            </div>
            <img src={Scooter} />
          </div>
    </>
  )
}
export default LandingPage_info