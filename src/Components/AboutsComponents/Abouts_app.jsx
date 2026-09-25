import Group_15 from '../../assets/image/Group_15.png';
import Frame37 from '../../assets/image/Frame37.png';
import Luckin_Phone from '../../assets/image/Luckin_Phone.png';
import Luckin_Phone1 from '../../assets/image/Luckin_Phone1.png';
import Luckin_Phone2 from '../../assets/image/Luckin_Phone2.png';
import Luckin_Phone3 from '../../assets/image/Luckin_Phone3.png';
function Abouts_app() {
    return (
        <>
              <div className='abouts__scooter abouts__app'>
                <img src={Group_15} />
                <div className='scooter__title'>
                  <h1>Luckin Coffee теперь в приложение Koinot Super App</h1>
                  <p>Заказывайте любимые напитки, получайте бонусы и находите ближайшие кофейни - все в одном приложение.</p>
                  <img src={Frame37} />
                </div>
              </div>
              <div className='abouts__dsp'>
                <div className='dsp__title'>
                  <h1>Как это работает</h1>
                  <p>Ваш любимый напиток всего в нескольких кликов от вас</p>
                </div>
              </div>
              <div className='coffes_img'>
                  <img src={Luckin_Phone} />
                  <img src={Luckin_Phone1} />
                  <img src={Luckin_Phone2} />
                  <img src={Luckin_Phone3} />
              </div>
        </>
    )
}
export default Abouts_app