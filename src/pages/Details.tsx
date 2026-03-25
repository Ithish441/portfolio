import { ExternalLink, CheckCircle } from 'lucide-react';
import profilePic from '../assets/profile.png';

function Details() {
  const projects = [
    { title: 'Neon E-Commerce', desc: 'High-contrast fashion store', tech: ['React', 'Node.js'] },
    { title: 'Brutal Dashboard', desc: 'Analytics platform with stark UI', tech: ['Vue', 'D3.js'] },
    { title: 'Glass Portfolio', desc: 'Creative agency landing page', tech: ['Next.js', 'Framer'] }
  ];

  const pricing = [
    { tier: 'Basic', price: '$500', features: ['1 Page', 'Basic SEO', '1 Revision'] },
    { tier: 'Pro', price: '$1500', features: ['5 Pages', 'Advanced Animations', '3 Revisions'] },
    { tier: 'Enterprise', price: 'Custom', features: ['Unlimited Pages', 'Custom Backend', 'Priority Support'] }
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      
      {/* About Section */}
      <section style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
        <h2 className="brutal-heading">About Me</h2>
        <div className="brutal-card" style={{ background: 'var(--accent-blue)', color: 'white' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '300px',
                aspectRatio: '1',
                margin: '0 auto',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: 'var(--brutal-shadow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <img 
                src={profilePic} 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 600 }}>
              I am a digital craftsman who believes in the power of raw, unpolished form combined with refined, interactive elements. My approach strips away unnecessary fluff, focusing on bold typography and layout, while using glassmorphism to highlight what truly matters: user interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
        <h2 className="brutal-heading">Selected Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="brutal-card" style={{ position: 'relative' }}>
              <div style={{ paddingBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {proj.tech.map(t => <span key={t} className="brutal-badge">{t}</span>)}
                </div>
              </div>
              
              {/* Glassmorphism Inner Element */}
              <div className="glass-panel" style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}>
                <span style={{ fontWeight: 700 }}>View Project</span>
                <ExternalLink size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="brutal-heading">Pricing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 250px), 1fr))', gap: '2rem' }}>
          {pricing.map((tier, idx) => (
            <div key={idx} className="brutal-card" style={{ 
              background: idx === 1 ? 'var(--text-primary)' : 'var(--bg-secondary)',
              color: idx === 1 ? 'white' : 'inherit'
            }}>
              <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tier.tier}</h3>
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 800, marginBottom: '2rem', fontFamily: 'Syne' }}>{tier.price}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tier.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <CheckCircle size={20} color={idx === 1 ? 'var(--accent-yellow)' : 'var(--accent-color)'} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="brutal-badge" style={{ 
                marginTop: '2rem', 
                width: '100%', 
                padding: '1rem', 
                background: idx === 1 ? 'var(--accent-yellow)' : 'var(--bg-primary)',
                cursor: 'pointer',
                border: idx === 1 ? 'none' : 'var(--border-thin)',
                color: 'var(--text-primary)'
              }}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Details;
