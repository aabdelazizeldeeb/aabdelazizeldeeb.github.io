import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../data/portfolioData';



const Projects = () => {


  // Because the list is 14 projects, duplicating it once for the infinite scroll is enough
  const marqueeProjects = [...projects, ...projects];
  
  // Dynamic calculation for animation duration based on project count so it doesn't run too fast
  const animationDuration = `${projects.length * 4}s`; 

  return (
    <section id="projects" className="section reveal" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title text-gradient stagger-1">Key Projects Portfolio</h2>
        <p className="stagger-2" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center' }}>A massive track record of delivering excellence across diverse mega-projects.</p>
      </div>
      
      {/* Marquee Container */}
      <div className="marquee-wrapper" style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        
        {/* Left and Right Fade Overlays */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '100%', background: 'linear-gradient(to right, var(--bg-dark), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '100%', background: 'linear-gradient(to left, var(--bg-dark), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
        
        <div className="marquee-content" style={{ 
          display: 'flex', 
          gap: '2rem',
          width: 'max-content',
          paddingLeft: '2rem',
          animationDuration: animationDuration
        }}>
          {marqueeProjects.map((project, index) => (
            <div key={project.title + index} className="glass-panel project-card" style={{ 
              padding: 0, 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              width: '350px',
              flexShrink: 0,
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'var(--accent-gold)', color: '#000',
                  padding: '0.4rem', borderRadius: '50%'
                }}>
                  <Briefcase size={16} />
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.3rem 0.8rem', 
                      background: 'rgba(212, 175, 55, 0.1)', 
                      color: 'var(--accent-gold)', 
                      borderRadius: '20px',
                      whiteSpace: 'nowrap'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
