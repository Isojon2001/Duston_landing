import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/icons/logo.png';
import Group from '../assets/icons/Group.png';

function Header() {
  return (
    <div className='landing__wrapper'>
      <div className='head__Landing'>
        <Link to='/'>
          <img src={Logo} />
        </Link>
        <ul>
          <NavLink
            to="/duston_about"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            О нас
          </NavLink>
          <Link to="/">Наши проекты</Link>
          <Link to="/">Контакты</Link>
        </ul>
      </div>
      <div className='landing__language'>
        <img src={Group} />
        <Link to="/">RU</Link>
        <Link to="/">EN</Link>
      </div>
    </div>
  );
}

export default Header;