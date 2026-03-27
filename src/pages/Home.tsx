import { Code2, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', justifyContent: 'center' }}>
      <div className="brutal-card" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>

        {/* Background decorative elements */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-color)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }}
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ position: 'absolute', bottom: '-20px', left: '-50px', width: '150px', height: '150px', background: 'var(--accent-blue)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }}
        />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <motion.span
              className="brutal-badge"
              style={{ marginBottom: '1rem', display: 'inline-block' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Available for Work
            </motion.span>

            <motion.h1
              className="brutal-heading"
              style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              I BUILD <br />
              <span style={{ color: 'var(--text-secondary)' }}>& I DESIGN.</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', maxWidth: '600px', fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              Full-Stack Developer and Graphic Designer crafting bold, functional, and visually striking digital experiences bridging harsh brutalism with elegant glassmorphism.
            </motion.p>
          </div>

          <motion.div
            style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          >
            <div className="floating-icon">
              <Code2 size={32} color="var(--accent-blue)" />
            </div>
            <div className="floating-icon" style={{ animationDelay: '1s' }}>
              <PenTool size={32} color="var(--accent-color)" />
            </div>
          </motion.div>

          <motion.div
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <Link to="/details" className="glass-btn">
              Explore My Work <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
