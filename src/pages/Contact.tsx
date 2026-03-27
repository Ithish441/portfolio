import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const InstagramIcon = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contacts = [
    {
      icon: <MessageCircle size={36} strokeWidth={2.5} />,
      label: 'WHATSAPP',
      value: '+91 72076 67827',
      href: 'https://wa.me/917207667827',
      accent: '#25D366',
      tag: 'Chat with me',
    },
    {
      icon: <Mail size={36} strokeWidth={2.5} />,
      label: 'EMAIL',
      value: 'ithishjonnes@gmail.com',
      href: 'mailto:ithishjonnes@gmail.com',
      accent: 'var(--accent-yellow)',
      tag: 'Drop a mail',
    },
    {
      icon: <InstagramIcon size={36} />,
      label: 'INSTAGRAM',
      value: '@ithish_jonnes_',
      href: 'https://www.instagram.com/ithish_jonnes_/',
      accent: '#E1306C',
      tag: 'Follow my work',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to buy my own domain and hosting?',
      a: 'Yes. For security and ownership, you should purchase the domain name and hosting plan in your name. This ensures you maintain full legal control over your digital assets. I will gladly guide you through the setup process or recommend the best providers for your needs.',
    },
    {
      q: 'How long does a website take?',
      a: 'It typically takes 1–2 weeks, depending on the number of pages and how many revisions are needed.',
    },
    {
      q: 'Do you provide SEO and performance optimization?',
      a: 'Absolutely. I implement SEO best practices (SSR/SSG) and optimize assets and server-side logic to ensure top-tier performance scores and better search engine visibility.',
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 8vw, 6rem)' }}>

      {/* Contact Section */}
      <section>
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <Reveal>
            <h2 className="brutal-heading" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}>LET'S<br />TALK.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 600, maxWidth: '560px', marginTop: '1rem' }}>
              Ready to build something bold? Reach out through any of the channels below.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {contacts.map((c, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '2rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.18s cubic-bezier(.22,1,.36,1), box-shadow 0.18s ease',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(-4px, -4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `8px 8px 0px ${c.accent}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(0,0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                {/* Accent stripe */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '100%',
                  background: c.accent,
                }} />

                {/* Icon bubble */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: c.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  flexShrink: 0,
                  border: 'var(--border)',
                }}>
                  {c.icon}
                </div>

                <div>
                  <p style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    opacity: 0.5,
                    marginBottom: '0.35rem',
                  }}>
                    {c.label}
                  </p>
                  <p style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                    wordBreak: 'break-word',
                  }}>
                    {c.value}
                  </p>
                </div>

                <span style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  fontFamily: 'Syne, sans-serif',
                  letterSpacing: '0.06em',
                  background: c.accent,
                  color: '#000',
                  padding: '0.3rem 0.75rem',
                  border: 'var(--border-thin)',
                  alignSelf: 'flex-start',
                }}>
                  {c.tag} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <Reveal>
          <h2 className="brutal-heading">FAQs</h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div
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
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Contact;
