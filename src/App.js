import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Featured from './components/Featured';
import Impact from './components/Impact';
import Clients from './components/Clients';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <main className=' max-w-[1920px] mx-auto overflow-hidden'>
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
      <Featured />
      <Impact />
      <Clients />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
