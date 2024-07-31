import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Featured from './components/Featured';
import Impact from './components/Impact';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Scrolltotop from './components/Scrolltotop';
import Preloader from './components/Preloader';
import Accordion from './components/Accordion';
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
      <Accordion />
      <Footer />
      <Scrolltotop />
      <Preloader />
    </div>
  );
}

export default App;
