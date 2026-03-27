import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import { PageTransition } from './components/PageTransition';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/details', label: 'About & Work' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
    }}>
      <motion.nav
        className="glass-panel"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          gap: 'clamp(0.5rem, 3vw, 2rem)',
          borderRadius: '50px',
          width: 'max-content',
          maxWidth: '90vw',
          justifyContent: 'center',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          whiteSpace: 'nowrap',
        }}
      >
      {links.map(({ to, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            style={{
              fontWeight: isActive ? 800 : 400,
              position: 'relative',
              paddingBottom: '2px',
            }}
          >
            {label}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#111',
                  borderRadius: '2px',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
      </motion.nav>
    </div>
  );
}

function AppContent() {
  useSmoothScroll();

  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </div>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
