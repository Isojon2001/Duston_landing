import Frame37 from '../../assets/image/Frame37.png'; 
import Evar from '../../assets/image/Evar.png'; 
import Group14 from '../../assets/image/Group14.png'; 
import Group13 from '../../assets/image/Group13.png'; 
import Tech from '../../assets/image/Tech.png'; 

function About_chargerTwo() {
    return (
        <>
        <div className='about__charger'>
          <div className='scooter__title'>
            <h1>Станция Koinot Qwatt в вашем заведении</h1>
          <p>
            Koinot Qwatt — это сервис аренды пауэрбанков через сеть специальных зарядных станций, расположенных в удобных точках города. Больше не нужно искать розетку или ждать, пока телефон зарядится, — найдите ближайшую станцию в Koinot Super App, отсканируйте QR-код, возьмите пауэрбанк и заряжайте устройство прямо в пути.
          </p>
          <div className='btn__charger'>
            <button>
          <img src={Group13} width='70' />
              Простая установка
        </button>
        <button>
          <img src={Tech} width='72'/>
          Подержка 24/7
        </button>
          </div>
          </div>
          <img src={Evar} />
        </div>
        <div className='about__charger'>
          <img src={Group14} />
          <div className='scooter__title'>
            <h1>Koinot Qwatt в приложении</h1>
            <h1>Koinot Super App</h1>
          <p>
            Находите станции,
             проверяете наличие пауэрбанков и управляете арендой прямо со смартфона
             в приложение Koinot Super App
          </p>
        <img src={Frame37} />
          </div>
        </div>
        </>
    )
}
export default About_chargerTwo