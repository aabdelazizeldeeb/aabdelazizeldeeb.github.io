import React from 'react';
import { PenTool, Box, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Technical Office & Design', icon: <PenTool size={32} color="var(--accent-gold)" />, desc: 'Shop Drawings, MTO/BOQ Preparation, Sheet Metal Design, and CNC Cutting Coordination.' },
    { name: '3D Modeling & CAD', icon: <Box size={32} color="var(--accent-blue)" />, desc: 'Expertise in 3ds Max, Inventor, Revit, and AutoCAD for electrical busbar systems.' },
    { name: 'Data & Automation', icon: <Database size={32} color="#10b981" />, desc: 'Power BI, Advanced Excel Modeling, and internal tools (HTML, CSS, JS, Tauri).' }
  ];

  return (
    <section id="about" className="section reveal" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="section-title text-gradient stagger-1">About Me</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in stagger-2">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              Over 5 years of <span className="text-gradient-gold">specialized experience</span> in electrical busbar systems.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              I am a Senior Technical Office & Design Specialist with extensive expertise in managing the full technical project lifecycle. From preliminary 2D/3D design and shop drawings to CNC fabrication coordination and delivery documentation.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Armed with a strong foundation in data analysis and automation, I develop dynamic computational models and internal software tools that drastically reduce calculation times and material waste, significantly enhancing manufacturing efficiency.
            </p>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {skills.map((skill, index) => (
              <div key={skill.name} className={`glass-panel stagger-${(index + 1) % 4 + 1}`} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  display: 'flex'
                }}>
                  {skill.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{skill.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
