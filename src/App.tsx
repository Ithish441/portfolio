import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      padding: '0.75rem 1rem',
      display: 'flex',
      gap: 'clamp(0.5rem, 3vw, 2rem)',
      borderRadius: '50px',
      width: 'max-content',
      maxWidth: '90vw',
      justifyContent: 'center',
      fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
      whiteSpace: 'nowrap'
    }}>
      <Link to="/" style={{ fontWeight: location.pathname === '/' ? 800 : 400, borderBottom: location.pathname === '/' ? '2px solid #111' : 'none' }}>Home</Link>
      <Link to="/details" style={{ fontWeight: location.pathname === '/details' ? 800 : 400, borderBottom: location.pathname === '/details' ? '2px solid #111' : 'none' }}>About & Work</Link>
      <Link to="/contact" style={{ fontWeight: location.pathname === '/contact' ? 800 : 400, borderBottom: location.pathname === '/contact' ? '2px solid #111' : 'none' }}>Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
