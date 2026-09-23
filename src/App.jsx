import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Abouts from "./Pages/Abouts";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/koinot_rason" element={<LandingPage />} />
        <Route path="/koinot_qwatt" element={<About />} />
        <Route path="/luckin_cofee" element={<Abouts />} />
      </Routes>
    </>
  );
}

export default App;