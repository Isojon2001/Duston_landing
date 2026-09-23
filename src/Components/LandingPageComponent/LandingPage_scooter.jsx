import Car from '../../assets/image/Car.png';
import Van from '../../assets/image/Van.png';
import Truck from '../../assets/image/Truck.png';

function LandingPage_scooter() {
  return (
    <>
    <div className='LandingPage__scooter'>
        <img src={Car} />
        <div className='scooter__title'>
          <h1>Автомобиль - до 200кг</h1>
          <p>Для заказов среднего объёма и веса,
            доставки из магазинов и интернет-площадок,
            а также для маршрутов, где скутер не подходит по расстоянию или объёму груза.</p>
        </div>
      </div>
      <div className='LandingPage__scooter'>
        <div className='scooter__title'>
          <h1>Фургон - до 2 тонн</h1>
          <p>Формат для бизнес-доставок:
            снабжение точек экосистемы, перевозка партий товара,
            обслуживание партнёров в сегменте e-com и HoReCa.</p>
        </div>
        <img src={Van} />
      </div>
      <div className='LandingPage__scooter'>
        <img src={Truck} />
        <div className='scooter__title'>
          <h1>Грузовик - до 5 тонн</h1>
          <p>Крупнотоннажные перевозки для оптовых партий,
            межгородской логистики и масштабных задач бизнеса.</p>
        </div>
      </div>
    </>
  )
}
export default LandingPage_scooter