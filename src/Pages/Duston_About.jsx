import Footer from '../Components/Footer'
import Rectangle43 from '../assets/image/Rectangle.png'
import Rectangle3 from '../assets/image/Rectangle3.png'
import Rectangle2 from '../assets/image/Rectangle2.png'

function Duston_About() {
  return (
    <div className="about__page">
      <div className='about__video__wrapper'>
        <div>
          <div className='about__video'>
            <video width="640" height="360" controls autoPlay muted>
              <source src="/path/to/video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает тег video.
            </video>
          </div>
          <div className='about__imagess'>
            <div className='images__title'>
              <h1>О нас</h1>
              <p>
                Мы развиваем диверсифицированный портфель бизнесов
                в разных отраслях — от цифровых сервисов до розничной
                сети и логистики. Каждое направление объединяет
                системный подход, технологичность и фокус на качестве.
              </p>
            <div className='About__img'>
              <img src={Rectangle43} alt="" />
              <img src={Rectangle3} alt="" />
              <img src={Rectangle2} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Duston_About