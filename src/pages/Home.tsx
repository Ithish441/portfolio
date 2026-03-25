import { Code2, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', justifyContent: 'center' }}>
      <div className="brutal-card" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-color)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5, zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20px', left: '-50px', width: '150px', height: '150px', background: 'var(--accent-blue)', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.5, zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <span className="brutal-badge" style={{ marginBottom: '1rem' }}>Available for Work</span>
            <h1 className="brutal-heading" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '1rem' }}>
              I BUILD <br/>
              <span style={{ color: 'var(--text-secondary)' }}>&amp; I DESIGN.</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', maxWidth: '600px', fontWeight: 600 }}>
              Full-Stack Developer and Graphic Designer crafting bold, functional, and visually striking digital experiences bridging harsh brutalism with elegant glassmorphism.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <div className="floating-icon">
              <Code2 size={32} color="var(--accent-blue)" />
            </div>
            <div className="floating-icon" style={{ animationDelay: '1s' }}>
              <PenTool size={32} color="var(--accent-color)" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/details" className="glass-btn">
              Explore My Work <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
