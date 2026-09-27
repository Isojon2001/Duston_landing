import koinoit_blobal from '../../assets/image/koinoit_blobal.png';
import alibaba_group from '../../assets/image/alibaba_group.png';
function LandingPage_info() {
  return (
    <>
      <div className='LandingPage__info'>
        <div className='LandingPage__title'>
          <h1>Покупки без границ</h1>
          <p>
            Мы развиваем диверсифицированный портфель бизнесов в разных отраслях — от цифровых сервисов до розничной сети и логистики. Koinot Global открывает клиентам крупнейшие маркетплейсы Китая — 1688, Taobao, Pinduoduo и Poizon — прямо внутри Koinot Super App: с переводом, ценой в сомони и выдачей заказов в постоматах Koinot Rason.
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
          <img src={koinoit_blobal} className='main__images-1' alt='images-tjk' />
        </div>
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>Описание Проекта</h1>
          <p>
            Koinot Global интегрирует товары четырёх зарубежных маркетплейсов в Koinot Super App и берёт на себя весь путь
            заказа — от поиска и перевода до выкупа,
            проверки на складе и доставки клиенту.
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter'>
        <div className='scooter__title'>
          <h1>1688 — опт от производителей</h1>
          <p>
            Оптовая площадка Alibaba Group: товары напрямую от фабрик по заводским ценам. Подходит для закупок партиями и товаров для бизнеса.
          </p>
        </div>
        <img src={alibaba_group} />
      </div>
    </>
  )
}
export default LandingPage_info