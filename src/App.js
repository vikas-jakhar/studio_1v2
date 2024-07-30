import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Featured from './components/Featured';
import Impact from './components/Impact';
import Clients from './components/Clients';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Scrolltotop from './components/Scrolltotop';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  return (
    <div className=' max-w-[1920px] mx-auto overflow-hidden'>
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
      <Featured />
      <Impact />
      <Clients />
      <Faq />
      <Footer />
      <Scrolltotop />
      <Preloader />
    </div>
  );
}

export default App;
