import Footer from '../Components/Footer'
import map_qwat from '../assets/image/map_qwat.png'; 
import About_info from '../Components/AboutComponents/About_info';
import About_charger from '../Components/AboutComponents/About_charger';
import About_chargerTwo from '../Components/AboutComponents/About_chargerTwo';
function About(props) {
  return (
    <div className='about__wrapper'>
      <About_info/>
      <About_charger/>
      <About_chargerTwo/>
        <img className='map__qwat' src={map_qwat} width='100%' />
        <Footer />
    </div>
    )
}
export default About