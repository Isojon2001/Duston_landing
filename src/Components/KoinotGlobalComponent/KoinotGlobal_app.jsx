import Frame38 from '../../assets/image/Frame38.png';
import Frame37 from '../../assets/image/Frame37.png';
import Phone from '../../assets/image/Phone.png';

function LandingPage_app() {
  return (
    <>
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
          <h1>Как это работает — от ссылки до постомата</h1>
          <p>
            Koinot Global не просто показывает чужие каталоги — мы выстраиваем всю цепочку:
            выкуп, проверку, международную логистику и доставку по городу.
          </p>
        </div>
      </div>
    </>
  )
}
export default LandingPage_app