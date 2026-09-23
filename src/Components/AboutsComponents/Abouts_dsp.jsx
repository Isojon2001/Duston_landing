import mapDc from '../../assets/image/mapDc.png';
import abouts_cofee from '../../assets/image/abouts_cofee.png';
import abouts_cofee1 from '../../assets/image/abouts_cofee1.png';
import abouts_coffe2 from '../../assets/image/abouts_coffe2.png';
function Abouts_app() {
    return (
        <>
              <div className='abouts__dsp'>
        <div className='dsp__title'>
          <h1>Koinot Rason B2B решение для бизнеса</h1>
          <p>
            Сеть постоматов с консьерж-сервисом для e-com партнёров
          </p>
        </div>
      </div>
      <div className='abouts__scooter abouts__app'>
        <div className='abouts_img'>
        <img src={abouts_cofee} />
        <img src={abouts_cofee1} />
        <img src={abouts_coffe2} />
        </div>
        <div className='scooter__title'>
          <h1>Любимвые вкусы на каждый день</h1>
          <p>
            Классический кофе, авторскые напиткаи и сезонные новинки - выбирайте свои.
          </p>
          <button>
            Посмотреть меню
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <img src={mapDc} width='100%' />
        </>
    )
}
export default Abouts_app