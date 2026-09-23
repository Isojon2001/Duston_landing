import Footer from '../Components/Footer'
import LandingPage_info from '../Components/LandingPageComponent/LandingPage_info';
import LandingPage_scooter from '../Components/LandingPageComponent/LandingPage_scooter';
import LandingPage_app from '../Components/LandingPageComponent/LandingPage_app';
import LandingPage_dsp from '../Components/LandingPageComponent/LandingPage_dsp';

function LandingPage(props) {
  return (
    <div className='LandingPage__wrapper'>
      <LandingPage_info/>
      <LandingPage_scooter/>
      <LandingPage_app/>
      <LandingPage_dsp/>
      <Footer />
    </div>
  )
}
export default LandingPage