import Footer from '../Components/Footer'
import Abouts_info from '../Components/AboutsComponents/Abouts_info';
import Abouts_scooter from '../Components/AboutsComponents/Abouts_scooter';
import Abouts_app from '../Components/AboutsComponents/Abouts_app';
import Abouts_dsp from '../Components/AboutsComponents/Abouts_dsp';

function Abouts() {
  return (
    <div className='abouts__wrapper'>
      <Abouts_info/>``
      <Abouts_scooter/>
      <Abouts_app/>
      <Abouts_dsp/>      
      <Footer />
    </div>
  )
}
export default Abouts