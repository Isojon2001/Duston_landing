import Footer from '../Components/Footer'
import KoinotGlobal_info from '../Components/KoinotGlobalComponent/KoinotGlobal_info';
import KoinotGlobal_scooter from '../Components/KoinotGlobalComponent/KoinotGlobal_scooter';
import KoinotGlobal_app from '../Components/KoinotGlobalComponent/KoinotGlobal_app';
import KoinotGlobal_dsp from '../Components/KoinotGlobalComponent/KoinotGlobal_dsp';

function KoinotGlobal(props) {
  return (
    <div className='KoinotGlobal__wrapper'>
      <KoinotGlobal_info/>
      <KoinotGlobal_scooter/>
      <KoinotGlobal_app/>
      <KoinotGlobal_dsp/>
      <Footer />
    </div>
  )
}
export default KoinotGlobal