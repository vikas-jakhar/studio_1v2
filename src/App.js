import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';

function App() {
  return (
    <main className=' max-w-[1920px] mx-auto overflow-hidden'>
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
    </main>
  );
}

export default App;
