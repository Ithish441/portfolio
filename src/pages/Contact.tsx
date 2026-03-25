import { useState } from 'react';
import { Send, ChevronDown, ChevronUp } from 'lucide-react';

function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'What is Glass-Brutalism?', a: 'It is a hybrid design trend that matches the raw, unpolished, structural aesthetic of Brutalism with the sleek, translucent, and elegant interactive elements of Glassmorphism.' },
    { q: 'How long does a website take?', a: 'Depending on the complexity, a standard 3-page site takes about 2-3 weeks from design to deployment.' },
    { q: 'Do you offer maintenance?', a: 'Yes, I offer ongoing maintenance and support packages for all enterprise clients.' }
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 8vw, 6rem)' }}>
      
      {/* Contact Form Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 6vw, 4rem)' }}>
        <div>
          <h2 className="brutal-heading" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}>LET'S<br/>TALK.</h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, maxWidth: '100%' }}>
            Ready to build something bold? Drop me a line and let's craft an unforgettable digital experience.
          </p>
        </div>
        
        <div className="brutal-card" style={{ background: 'var(--accent-yellow)' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'Syne' }}>NAME</label>
            <input type="text" className="brutal-input" placeholder="John Doe" />
            
            <label style={{ fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'Syne' }}>EMAIL</label>
            <input type="email" className="brutal-input" placeholder="john@example.com" />
            
            <label style={{ fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'Syne' }}>MESSAGE</label>
            <textarea className="brutal-input" rows={4} placeholder="Tell me about your project..."></textarea>
            
            <button type="submit" className="glass-btn" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <h2 className="brutal-heading">FAQs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="brutal-card" 
              style={{ cursor: 'pointer', padding: '1.5rem 2rem' }}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{faq.q}</h3>
                {openFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {openFaq === idx && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: 'var(--border-thin)' }}>
                  <p style={{ fontSize: '1.1rem' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Contact;
