import Delivery from '../../assets/image/Delivery.png';
import Luckin_coffe from '../../assets/image/Luckin_coffe.png';
import POPMini from '../../assets/image/POPMini.png';
import Relax from '../../assets/image/Relax.png';

function abouts__scooter() {
  return (
    <>
      <div className='abouts__scooter'>
        <img src={Delivery} />
        <div className='scooter__title'>
          <h1>Delivery Kitchen</h1>
          <p>Только доставка</p>
          <p>Специализированные точки без торгового зала, созданные для быстрой сборки онлайн-заказов и курьерской доставки.</p>
        </div>
      </div>
      <div className='abouts__scooter'>
        <div className='scooter__title'>
          <h1>Express</h1>
          <p>Кофе на ходу</p>
          <p>Компактные точки в бизнес-центрах, университетах, на вокзалах и других местах с высоким потоком людей</p>
        </div>
        <img src={Luckin_coffe} />
      </div>
      <div className='abouts__scooter'>
        <img src={POPMini} />
        <div className='scooter__title'>
          <h1>POPMini</h1>
          <p>Кофе там, где вы работаетеу</p>
          <p>Автоматизированные кофейные станции для офисов и корпоративных пространств — быстрый доступ к кофе в течение дня.</p>
        </div>
      </div>
      <div className='abouts__scooter'>
        <div className='scooter__title'>
          <h1>
            Relax / Elite Format
          </h1>
          <p>Место для встреч и отдыха</p>
          <p>Просторные кофейни с полноценной посадкой — для встреч, работы, общения и неспешного отдыха с любимым кофе.</p>
        </div>
        <div>
          <img src={Relax} />
        </div>
      </div>
    </>
  )
}
export default abouts__scooter