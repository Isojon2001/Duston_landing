import Footer from '../Components/Footer'
import KoinotSavora_info from '../Components/KoinotSavoraComponent/KoinotSavora_info';
import KoinotSavora_scooter from '../Components/KoinotSavoraComponent/KoinotSavora_scooter';
import KoinotSavora_app from '../Components/KoinotSavoraComponent/KoinotSavora_app';
import KoinotSavora_dsp from '../Components/KoinotSavoraComponent/KoinotSavora_dsp';

function KoinotSavora(props) {
  return (
    <div className='KoinotSavora__wrapper'>
      <KoinotSavora_info/>
      <KoinotSavora_scooter/>
      <KoinotSavora_app/>
      <KoinotSavora_dsp/>
      <Footer />
    </div>
  )
}
export default KoinotSavora