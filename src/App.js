import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Featured from './components/Featured';
import Impact from './components/Impact';
import Clients from './components/Clients';
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
    </main>
  );
}

export default App;
