import Taobao from '../../assets/image/Taobao.png';
import pinduoduo from '../../assets/image/pinduoduo.png';
import poizon from '../../assets/image/poizon.png';

function LandingPage_scooter() {
  return (
    <>
      <div className='LandingPage__scooter'>
        <img src={Taobao} />
        <div className='scooter__title'>
          <h1>Taobao — розница для всех</h1>
          <p>
            Крупнейший розничный маркетплейс Китая:
            электроника, одежда, товары для дома и почти всё остальное —
            для личных покупок в штуках.
          </p>
        </div>
      </div>
      <div className='LandingPage__scooter'>
        <div className='scooter__title'>
          <h1>Pinduoduo — выгодные цены</h1>
          <p>
            Площадка низких цен и групповых скидок на повседневные товары.
            Для бюджетных покупок для дома и семьи.
          </p>
        </div>
        <img src={pinduoduo} />
      </div>
      <div className='LandingPage__scooter'>
        <img src={poizon} />
        <div className='scooter__title'>
          <h1>Poizon — оригинальные бренды</h1>
          <p>
            Кроссовки, одежда и аксессуары мировых брендов с проверкой подлинности — для брендовых вещей и лимитированных релизов.
          </p>
        </div>
      </div>
    </>
  )
}
export default LandingPage_scooter