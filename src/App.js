import Preloader from './components/Preloader';
import Scrolltotop from './common/Scrolltotop';
import Footer from './common/Footer';
import Navbar from "./common/Navbar";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';

function App() {
  return (
    <div className=' max-w-[1920px] mx-auto overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
      <Scrolltotop />
      <Preloader />
    </div>
  );
}

export default App;
