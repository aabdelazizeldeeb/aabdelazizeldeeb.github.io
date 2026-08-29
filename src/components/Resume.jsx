import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section reveal" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="section-title text-gradient stagger-1">My Resume</h2>
        <p className="stagger-2" style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
          A summary of my professional journey, skills, and educational background.
        </p>
        
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Summary */}
            <div className="glass-panel stagger-3" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Professional Summary
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Senior Technical Office & Design Specialist with over 5 years of specialized experience in electrical busbar manufacturing and power distribution systems, complemented by a strong foundation in data analysis and automation. Experienced in managing the full technical project lifecycle, including preliminary 2D/3D design, shop drawings, BOQs, MTOs, material submittals, CNC fabrication coordination, production follow-up, and delivery documentation. Demonstrated ability to improve engineering workflows, reducing calculation time by 70% and fabrication scrap and material waste by 20%.
              </p>
            </div>

            {/* Core Expertise & Software */}
            <div className="glass-panel stagger-4" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                Technical & Digital Tools
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <li><strong style={{ color: '#fff' }}>Engineering & Design:</strong> AutoCAD, Autodesk Inventor, Revit, 3ds Max.</li>
                <li><strong style={{ color: '#fff' }}>Data & Automation:</strong> Advanced Excel, Dynamic Computational Models, Power BI.</li>
                <li><strong style={{ color: '#fff' }}>Manufacturing:</strong> CNC & Router Fabrication Layout Tools, Production Coordination.</li>
                <li><strong style={{ color: '#fff' }}>Additional Tech Skills:</strong> Internal Tool Development (HTML, CSS, JavaScript, Tauri Framework).</li>
              </ul>
            </div>
            
            {/* Education & Languages */}
            <div className="glass-panel stagger-3" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                Education & Languages
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>Bachelor of Law</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Sadat City University | 2015 – 2019</p>
              </div>
              <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong style={{ color: '#fff' }}>Arabic:</strong> Native</li>
                <li><strong style={{ color: '#fff' }}>English:</strong> Very Good</li>
                <li><strong style={{ color: '#fff' }}>French:</strong> Good</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel stagger-2" style={{ padding: '2rem', border: '1px solid var(--accent-gold)', background: 'rgba(212, 175, 55, 0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Senior Technical Office & Design Specialist</h3>
              <p style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 500 }}>
                Power Busbar for Electrical Industries | Aug 2021 – Present
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', paddingLeft: '1rem', listStyleType: 'circle' }}>
                <li>Lead and mentor a team of engineers, reviewing technical and production drawings, assigning tasks, and ensuring adherence to project deadlines and quality standards.</li>
                <li>Directed the complete technical project lifecycle, from preliminary 2D/3D design and shop drawings through production coordination and final dispatch review.</li>
                <li>Developed advanced dynamic computational models in Excel to automate comprehensive engineering and fabrication calculations, reducing overall calculation time by 70%.</li>
                <li>Ensured rigorous compliance with international IEC standards, developing highly competitive busbar systems.</li>
                <li>Optimized raw material utilization and CNC routing layouts for copper and aluminum fabrication, reducing fabrication scrap and material waste by 20%.</li>
                <li>Approved realistic 3D visual content and technical product catalogs using 3ds Max.</li>
              </ul>
            </div>

            <div className="glass-panel stagger-3" style={{ padding: '1.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.2rem' }}>Military Service</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Egyptian Armed Forces | March 2020 – July 2021
              </p>
            </div>

            <div className="glass-panel stagger-4" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Accountant & Data Analyst</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Rihana for Agriculture Investment | Dec 2018 – Feb 2020
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', paddingLeft: '1rem', listStyleType: 'circle' }}>
                <li>Analyzed financial data and prepared management reports using advanced Excel functions and data analysis techniques.</li>
                <li>Structured and consolidated complex multi-file datasets, performing extensive data cleaning to improve data accuracy and consistency.</li>
                <li>Prepared and filed tax returns in accordance with applicable tax laws and regulatory requirements.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
