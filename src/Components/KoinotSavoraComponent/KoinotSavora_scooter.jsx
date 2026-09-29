import savora_moyka from '../../assets/image/savora_moyka.png';
import savora_samomoyka from '../../assets/image/savora_samomoyka.png';
import oilchange from '../../assets/image/oilchange.png';
import sushka from '../../assets/image/sushka.png';
import savora_charger from '../../assets/image/savora_charger.png';
function KoinotSavora_scooter() {
  return (
    <>
      <div className='savora__scooter'>
        <img src={savora_moyka} />
        <div className='scooter__title'>
          <h1>
            Робот-мойка
          </h1>
          <p>
            Бесконтактная портальная мойка: автомобиль моется автоматически,
            без участия оператора и без контакта щёток с кузовом — быстро и бережно к лакокрасочному покрытию.
          </p>
        </div>
      </div>
      <div className='savora__scooter'>
        <div className='scooter__title'>
          <h1>
            Самомойка
          </h1>
          <p>
            Два поста самообслуживания: вы сами выбираете режимы
            — пена, вода под давлением, воск, ополаскивание — и моете автомобиль в своём темпе.
          </p>
        </div>
        <img src={savora_samomoyka} />
      </div>
      <div className='savora__scooter'>
        <img src={oilchange} />
        <div className='scooter__title'>
          <h1>
            Замена масла и вулканизация
          </h1>
          <p>
            Замена масла и фильтров, шиномонтаж, балансировка и
            ремонт колёс в отдельном боксе с подъёмником.
          </p>
        </div>
      </div>
      <div className='savora__scooter'>
        <div className='scooter__title'>
          <h1>
            Сушка и протирка
          </h1>
          <p>
            После мойки автомобиль можно довести до блеска под навесом:
            он защищает от дождя и солнца, пока вы протираете кузов и салон.
          </p>
        </div>
        <img src={sushka} />
      </div>
      <div className='savora__scooter'>
        <img src={savora_charger} />
        <div className='scooter__title'>
          <h1>
            Зарядка электромобилей
          </h1>
          <p>
            Пять зарядных станций у въезда. Пока электромобиль заряжается,
            его можно помыть или записаться на обслуживание.
          </p>
        </div>
      </div>
    </>
  )
}
export default KoinotSavora_scooter