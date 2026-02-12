import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Hire from './pages/Hire';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
