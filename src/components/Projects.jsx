import React from 'react';
import { Briefcase } from 'lucide-react';

import imgKingSalman from '../assets/Images/Projects/KingSalmanAirport.jpg';
import imgMars from '../assets/Images/Projects/Mars.webp';
import imgDubai from '../assets/Images/Projects/DubaiMall.webp';
import imgFairmont from '../assets/Images/Projects/FairmontHotel.jpg';
import imgPortSaid from '../assets/Images/Projects/PortSaidAirport.jpg';
import imgAhlMasr from '../assets/Images/Projects/AhlMasrWalkway.jpg';
import imgCentralBus from '../assets/Images/Projects/CentralBusstation.jpeg';
import imgBoysen from '../assets/Images/Projects/BoysenFactory.jpg';
import imgChipsy from '../assets/Images/Projects/ChipsyFactory.jpg';
import imgCleopatra from '../assets/Images/Projects/CleopatraMall.webp';
import imgHilton from '../assets/Images/Projects/HiltonHotel.jpg';
import imgLavenir from '../assets/Images/Projects/L\'avenir.webp';
import imgGolfPalm from '../assets/Images/Projects/golfpalm.webp';
import imgZed from '../assets/Images/Projects/ZedClub.jpg';

const Projects = () => {
  const projects = [
    // Featured Projects from CV
    { title: 'King Salman Airport, KSA', desc: 'Extensive electrical busbar routing design and 3D modeling for massive aviation infrastructure. Delivered full shop drawings and CNC fabrication files.', tags: ['Busbar Design', '3D Modeling'], img: imgKingSalman },
    { title: 'New Mars Factory, Egypt', desc: 'Complete busbar trunking layouts and production coordination. Optimized routing for F&B industrial standards with precision MTOs.', tags: ['Shop Drawings', 'MTOs'], img: imgMars },
    { title: 'Dubai Mall, Egypt', desc: 'Commercial power distribution utilizing complex busbar joints and risers. Provided visualization and full delivery documentation.', tags: ['Busbar Joints', 'Coordination'], img: imgDubai },
    { title: 'Fairmont Hotel, KSA', desc: 'Luxury hospitality busbar systems design. Handled intricate vertical riser alignments, shop drawings, and fabrication support.', tags: ['Vertical Risers', 'Fabrication Support'], img: imgFairmont },
    { title: 'Port Said Airport, Egypt', desc: 'Aviation facility power mapping with heavy-duty busbar configurations. Issued accurate BOQs and CNC router cutting files.', tags: ['BOQs', 'CNC Layouts'], img: imgPortSaid },
    
    // Additional Projects from CV
    { title: 'Ahl Misr Walkway', desc: 'Custom busbar alignments for scenic public infrastructure. Provided material submittals and site-specific fabrication layouts.', tags: ['Busbar Alignments', 'Submittals'], img: imgAhlMasr },
    { title: 'Central Bus Station', desc: 'Detailed shop drawings and fabrication planning for station-wide electrical busbar distribution systems.', tags: ['Shop Drawings', 'Distribution'], img: imgCentralBus },
    { title: 'Boysen Factory', desc: 'Automotive industrial busbar design. Coordinated high-power routing, calculated voltage drops, and managed CNC layouts.', tags: ['Voltage Drop', 'CNC Layouts'], img: imgBoysen },
    { title: 'Chipsy Factory', desc: 'Massive scale snack plant busbar trunking. Handled complex layout coordination, sheet metal bend deductions, and MTO generation.', tags: ['Bend Deductions', 'Trunking'], img: imgChipsy },
    { title: 'Cleopatra Mall', desc: 'Commercial complex electrical routing. Created dynamic computational models for short-circuit limits in busbar runs.', tags: ['Short-Circuit Limits', 'Models'], img: imgCleopatra },
    { title: 'Hilton Hotel Hurghada', desc: 'Resort-scale power systems. Produced precise shop drawings for horizontal and vertical busbar intersections.', tags: ['Shop Drawings', 'Intersections'], img: imgHilton },
    { title: "L'avenir City", desc: 'Mega-city infrastructure. Coordinated busbar networks across diverse residential and commercial blocks with complete documentation.', tags: ['Busbar Networks', 'Documentation'], img: imgLavenir },
    { title: 'Golf Palm Hills', desc: 'Premium residential busbar distribution. Delivered 3D engineering models and seamless fabrication coordination.', tags: ['3D Models', 'Fabrication'], img: imgGolfPalm },
    { title: 'Zed East Club', desc: 'Sports facility power routing. Designed reliable busbar joints and trunking systems tailored to high-load recreational equipment.', tags: ['Busbar Joints', 'Trunking'], img: imgZed }
  ];

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
