import Shield from '../../assets/image/Shield.png'; 
import Chergerman from '../../assets/image/Chergerman.png'; 
import Charger from '../../assets/image/Charger.png'; 
import Powerbank from '../../assets/image/Powerbank.png'; 
import Lighting from '../../assets/image/Lighting.png'; 
import Group6 from '../../assets/image/Group6.png'; 
function About_charger() {
    return (
        <>
                <div className='super__charger'>
            <div>
              <div>
                <h1>Надёжный помощник на каждый день</h1>
                <p>Больше чем просто заряд</p>
              </div>
              <div className='about__charger_flex'>
                <div className='bg_color__about'>
                  <img src={Lighting}/>
                  <div>
                    <h1>Быстрая зарядка</h1>
                    <p>зарядка устройств, быстро и безопасно и</p>
                  </div>
                </div>
                <div className='bg_color__about'>
                  <img src={Group6} />
                  <div>
                    <h1>Для всех устройств</h1>
                    <p>USB-C, Lightning и другие разбёми</p>
                  </div>
                </div>
                <div className='bg_color__about'>
                  <img src={Shield}/>
                  <div>
                    <h1>Надёжно</h1>
                    <p>Качественные и проверенные батареи</p>
                  </div>
                </div>
                <div className='bg_color__about'>
                  <img src={Chergerman}/>
                  <div>
                    <h1>Компактный</h1>
                    <p>Компактный и удобный в использовании</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={Powerbank} />
        </div>
        <div className='about__charger'>
          <img src={Charger} />
          <div className='scooter__title'>
            <h1>Современные технологические станции по всему городу</h1>
          <p>
            Koinot Qwatt — это сервис аренды пауэрбанков через сеть специальных зарядных станций,
             расположенных в удобных точках города. 
             Больше не нужно искать розетку или ждать, пока телефон зарядится,
              — найдите ближайшую станцию в Koinot Super App, отсканируйте QR-код,
             возьмите пауэрбанк и заряжайте устройство прямо в пути.
          </p>
            <button>
          Карта Станции
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
          </div>
        </div>
        </>
    )
}
export default About_charger