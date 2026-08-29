import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Custom Facebook SVG Icon
const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// Custom LinkedIn SVG Icon
const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Custom WhatsApp SVG Icon
const WhatsappIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact from ' + formData.name);
    const body = encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email);
    window.location.href = `mailto:A.AbdelazizEldeeb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2 className="section-title text-gradient stagger-1">Get In Touch</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
          
          <div className="glass-panel stagger-2">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Let's work together</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Whether you need expert 3D modeling, technical office leadership, or comprehensive shop drawings, I'm ready to bring your vision to life.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#fff' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>A.AbdelazizEldeeb@gmail.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#fff' }}>WhatsApp / Phone</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+20 150 066 2221</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#fff' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Sadat City, Menoufia, Egypt</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
              <a href="https://wa.me/201500662221" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%', color: '#fff', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = '#25D366'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <WhatsappIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aabdelazizeldeeb/" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%', color: '#fff', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = '#0A66C2'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <LinkedinIcon size={20} />
              </a>
              <a href="https://facebook.com/a.abdelazizeldeeb/" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%', color: '#fff', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = '#1877F2'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>
          
          <form className="glass-panel stagger-3" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Send a Message</h3>
            
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{ width: "100%", padding: "1rem", background: "rgba(0,0,0,0.3)", border: "1px solid var(--glass-border)", borderRadius: "8px", color: "#fff", outline: "none" }} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" style={{ width: "100%", padding: "1rem", background: "rgba(0,0,0,0.3)", border: "1px solid var(--glass-border)", borderRadius: "8px", color: "#fff", outline: "none" }} />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" style={{ width: "100%", padding: "1rem", background: "rgba(0,0,0,0.3)", border: "1px solid var(--glass-border)", borderRadius: "8px", color: "#fff", outline: "none", resize: "vertical" }}></textarea>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:A.AbdelazizEldeeb@gmail.com'; }}>
              Send Message
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
