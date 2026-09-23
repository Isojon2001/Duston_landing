import { Link } from 'react-router-dom'
import Evarlogo from '../assets/image/Evar_logo.png'
import Teh from '../assets/image/Teh.png'
import koinot_logo from '../assets/image/koinot_logo.png'
import ASR from '../assets/image/ASR.png'
import Footer from './Footer'

function Our_projects(props) {
  return (
    <div className='partners_wrapper'>
      <div className='partners_info'>
        <div className='partners_title'>
          <h1>Партнёры</h1>
          <p>
            Мы открыты к сотрудничеству и всегда рады новым партнёрствам, которые помогают расти вместе.Наша группа компаний объединяет экспертизу в самых разных отраслях — от IT и логистики до розницы и сервисов для потребителей. Это даёт партнёрам доступ к масштабу, ресурсам и опыту сразу нескольких успешных направлений бизнеса.
          </p>
        </div>
        <div className='partners_logo'>
          <Link to='https://evar.tj/'
            target="_blank"
          >
            <img src={Evarlogo} />
          </Link>
          <img src={Teh} />
          <Link to='https://koinotinav.tj/'
            target="_blank"
          >
            <img src={koinot_logo} />
          </Link>
          <img src={ASR} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Our_projects