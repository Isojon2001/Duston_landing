import Frame38 from '../../assets/image/Frame38.png';
import Frame37 from '../../assets/image/Frame37.png';
import Phone from '../../assets/image/Phone.png';

function LandingPage_app() {
  return (
    <>
      <div className='LandingPage__scooter LandingPage__app'>
        <div className='scooter__title'>
          <p>
            <span>Мобильное приложения "Koinot Rason"</span>
            <br />
            Всё необходимое для работы
            курьера - в одном приложениию
          </p>
          <p>
            <span>Заказы</span>
            - Автоматическое распределение заявок в режиме реального времени
          </p>
          <p>
            <span>Отслеживание</span>
            - навигация и статус доставки на каждом этапе
          </p>
          <p>
            <span>Статистика</span>
            - Заработок, количество заказов и эффктивность в удобных отчётах
          </p>
          <p>
            <span>Баланс</span>
            - Вывод заработанных средств на карту любого банка Таджикистана
          </p>
        </div>
        <div className='scooter__phone'>
          <img src={Frame38} />
          <img src={Frame37} />
        </div>
      </div>
      <div className='LandingPage__scooter LandingPage__app'>
        <img src={Phone} />
        <div className='scooter__title'>
          <h1>Для клиентов - доставка в Super App Koinot</h1>
          <p>
            Весь сегмент B2C-заказов Koinot Rason работает через Super App Koinot. Клиенту не нужно устанавливать отдельное приложение или искать курьерскую службу — заказ на доставку оформляется там же, где заказывается еда, товары или другие услуги экосистемы.
          </p>
          <p>
            Это делает Koinot Rason назметной, но незаменимой частью
            повседнего пользовательского опыта: заказо оформлен - курьер уже в пути
          </p>
          <img src={Frame37} />
        </div>
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>Swappin система быстрой замены батареи для курьеров</h1>
          <p>Koinot Rason не просто сдаёт электроскутеры в аренду — мы строим целую инфраструктуру, которая экономит время курьера на каждом заказе.
          </p>
        </div>
      </div>
    </>
  )
}
export default LandingPage_app