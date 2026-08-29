import React from 'react';
import Scene3D from './Scene3D';

import profilePic from '../assets/Images/MyPic.png';
import cvFile from '../assets/PDF/Ahmed_Abdelaziz_CV.pdf';

const Hero = () => {
  return (
    <section id="home" className="section reveal" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative' }}>
      <Scene3D />
      <div className="container grid grid-cols-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className="animate-fade-in">
          <h1 className="stagger-1" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '0.5rem', lineHeight: '1.1', fontWeight: 800 }}>
            Ahmed <br/> <span className="text-gradient-gold">Abdelaziz</span>
          </h1>
          <h2 className="stagger-2" style={{ 
            fontSize: '1rem', 
            color: 'var(--accent-gold)', 
            marginBottom: '2rem', 
            fontWeight: 600, 
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '50px'
          }}>
            Senior Technical Office & Design Specialist
          </h2>
          <p className="stagger-3" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '550px' }}>
            Over 5 years of specialized experience in electrical busbar manufacturing and power distribution systems. Expert in bridging technical 2D/3D design with automated production operations.
          </p>
            <div className="stagger-4" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <a href={cvFile} download="Ahmed_Abdelaziz_CV.pdf" className="btn btn-primary">Download CV</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
        </div>
        
        <div className="animate-fade-in delay-200" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'var(--accent-gold-glow)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          <div style={{ 
            width: '100%', 
            maxWidth: '450px', 
            position: 'relative', 
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
             <img 
                src={profilePic} 
                alt="Ahmed Abdelaziz Eldeeb" 
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
                  transform: 'translateY(-10px)'
                }} 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
