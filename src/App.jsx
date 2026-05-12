import './styles/index.css';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import About from './pages/About';
import Philanthropy from './pages/Philanthropy';
import Hospitality from './pages/Hospitality';
import Logistics from './pages/Logistics';
import PraNam from './pages/PraNam';
import Precast from './pages/Precast';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/hotels" element={<Hospitality />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/hospitality" element={<PraNam />} />
          <Route path="/precast" element={<Precast />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster position="top-center" richColors theme="dark" />
      </BrowserRouter>
    </div>
  );
}

export default App;
