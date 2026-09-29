import Frame37 from '../../assets/image/Frame37.png';
import savora__app from '../../assets/image/savora__app.png';
import savora_times from '../../assets/image/savora_times.png';
import savora_times2 from '../../assets/image/savora_times2.png';
import savora_times3 from '../../assets/image/savora_times3.png';
import savora_tiems4 from '../../assets/image/savora_tiems4.png';
import savora_times5 from '../../assets/image/savora_times5.png';

function KoinotSavora_app() {
  return (
    <>
      <div className='LandingPage__scooter LandingPage__app'>
        <img src={savora__app} />
        <div className='scooter__title savora__apps'>
          <h1>Savora — внутри Koinot Super App</h1>
          <p>
            Отдельное приложение устанавливать не нужно. Всё взаимодействие с Savora
            — от записи до чека — происходит в разделе Savora в Koinot Super App,
            тем же аккаунтом, что и для других сервисов экосистемы.
          </p>
          <img src={Frame37} />
        </div>
      </div>
      <div className='savora__readme'>
        <div className='readme_bg'>
          <img src={savora_times} alt="" />
          <p>Онлайн-запись</p>
        </div>
        <div className='readme_bg'>
          <img src={savora_times2} alt="" />
          <p>Живая очередь</p>
        </div>
        <div className='readme_bg'>
          <img src={savora_times3} alt="" />
          <p>Запуск по QR</p>
        </div>
        <div className='readme_bg'>
          <img src={savora_tiems4} alt="" />
          <p>Управление зарядкой очередь</p>
        </div>
        <div className='readme_bg'>
          <img src={savora_times5} alt="" />
          <p>Оплата в приложении</p>
        </div>
      </div>
      <div className='LandingPage__dsp'>
        <div className='dsp__title'>
          <h1>Как это работает</h1>
          <p>
            Четыре шага от телефона до чистого и заряженногоавтомобиля — без касс и ожидания у администратора.
          </p>
        </div>
      </div>
    </>
  )
}
export default KoinotSavora_app