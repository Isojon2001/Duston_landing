import Footer from '../Components/Footer'
import mapDc from '../assets/image/mapDc.png'; 
import About_info from '../Components/AboutComponents/About_info';
import About_charger from '../Components/AboutComponents/About_charger';
import About_chargerTwo from '../Components/AboutComponents/About_chargerTwo';
function About(props) {
  return (
    <div className='about__wrapper'>
      <About_info/>
      <About_charger/>
      <About_chargerTwo/>
        <img src={mapDc} width='100%' />
        <Footer />
    </div>
    )
}
export default About