import { Link } from "react-router-dom";
import Logo from '../assets/icons/logo.png'
import Group from '../assets/icons/Group.png'
function Header(props) {
  return (
    <div className='landing__wrapper'>
      <div className='head__Landing'>
        <Link to='/'>
          <img src={Logo} />
        </Link>
        <ul>
          <Link to="/">О нас</Link>
          <Link to="/">Наши проекты</Link>
          <Link to="/">Контакты</Link>
        </ul>

      </div>
      <div className='landing__language'>
        <img src={Group} />
        <Link>RU</Link>
        <Link>EN</Link>
      </div>
    </div>
  )
}
export default Header