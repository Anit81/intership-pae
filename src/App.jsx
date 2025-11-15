import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";
import { AboutComponent } from './components/about';
import { HomeComponent } from './components/home';
import { FooterCom } from './components/footer';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <img src="/download (12).png" alt="Logo" className="logo" />

        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav menu */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)}>Our Solutions</Link>
          <Link to="/invest" onClick={() => setIsOpen(false)}>Invest</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>

      <FooterCom />
    </>
  );
}

export default App;
