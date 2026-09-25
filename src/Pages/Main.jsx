import { Link } from 'react-router-dom';
import Main_info from '../Components/Main_info'
import Our_projects from '../Components/Our_projects'
import Partners from '../Components/Partners'
import myImage from '../assets/image/Rectangle.png'; 
import myImage_1 from '../assets/image/Rectangle1.png'; 
import myImage_2 from '../assets/image/Rectangle2.png';
import myImage_3 from '../assets/image/Rectangle3.png';
function Main(props) {
  return (
    <div className='main__wrapper'>
      <div className='main__info'>
        <div className='main__title'>
        <h1>экосистема которая работает на тебя</h1>
        <Link to='/duston_about'>
        <button>Подробнее</button>
        </Link>
        </div>
        <div className='main__images'>
          <img src={myImage} className='main__images-1' alt='images-tjk' />
          <img src={myImage_1} className='main__images-2' alt='images-tjk' />
          <img src={myImage_2} className='main__images-3' alt='images-tjk' />
          <img src={myImage_3} className='main__images-4' alt='images-tjk' />
        </div>
      </div>
        <Main_info />
        <Our_projects />
        <Partners />
    </div>
    )
}
export default Main