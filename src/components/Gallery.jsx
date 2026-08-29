import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Layers, ShieldCheck, PenTool, LayoutTemplate, Box, X } from 'lucide-react';

// Dynamically import all images and videos from the subfolders
const imports = import.meta.glob('../assets/Images/3D Design/**/*.{png,jpg,jpeg,mp4}', { eager: true });

// Helper to format filenames into readable titles
const formatTitle = (path) => {
  const filename = path.split('/').pop().split('.')[0];
  return filename.replace(/_/g, ' ').replace(/-/g, ' ');
};

// Process all imports into items
const allItems = Object.keys(imports).map(path => {
  // Extract category from path (e.g. "../assets/Images/3D Design/IP55/image.png" -> "IP55")
  const pathParts = path.split('/');
  const category = pathParts[pathParts.length - 2]; 
  const isVideo = path.endsWith('.mp4');

  return {
    src: imports[path].default,
    title: formatTitle(path),
    category: category,
    isVideo: isVideo
  };
});

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  const tabs = [
    { id: 'All', label: 'All Designs', icon: <Layers size={16} /> },
    { id: 'IP68', label: 'IP68 Series', icon: <ShieldCheck size={16} /> },
    { id: 'IP55', label: 'IP55 Series', icon: <Camera size={16} /> },
    { id: 'Product Overview', label: 'Products', icon: <Box size={16} /> },
    { id: 'Installation', label: 'Installation', icon: <LayoutTemplate size={16} /> },
    { id: 'ShopDrawing', label: 'Shop Drawings', icon: <PenTool size={16} /> },
  ];

  const filteredItems = activeTab === 'All' ? allItems : allItems.filter(item => item.category === activeTab);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="gallery" className="section reveal" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Camera size={32} color="var(--accent-gold)" />
          <h2 className="section-title text-gradient" style={{ marginBottom: 0 }}>3D Renders & Simulations</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          A comprehensive showcase of my professional 3D modeling, environmental testing simulations, and detailed shop drawings. (Click to zoom)
        </p>
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => {
            // Only show tab if there are items in it (or if it's "All")
            if (tab.id !== 'All' && !allItems.some(i => i.category === tab.id)) return null;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  color: activeTab === tab.id ? '#000' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--glass-border)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeTab === tab.id ? 600 : 400
                }}
              >
                {tab.icon} {tab.label}
              </button>
            )
          })}
        </div>
        
        {/* Masonry-like Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ padding: '0.5rem', overflow: 'hidden', cursor: 'zoom-in' }}
              onClick={() => setSelectedMedia(item)}
            >
              <div style={{ height: '280px', width: '100%', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}>
                
                {item.isVideo ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                )}
                
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, width: '100%',
                  padding: '2.5rem 1rem 1rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  pointerEvents: 'none'
                }}>
                  <h4 style={{ color: '#fff', fontSize: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    {item.title}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Lightbox Modal - MOVED OUTSIDE SECTION TO FIX POSITION FIXED */}
      {selectedMedia && createPortal(
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.95)', zIndex: 999999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '2rem', backdropFilter: 'blur(10px)'
          }}
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={e => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedMedia(null)}
              style={{
                position: 'absolute', top: '-40px', right: '0', background: 'transparent',
                border: 'none', color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={32} />
            </button>
            
            {selectedMedia.isVideo ? (
              <video 
                src={selectedMedia.src} 
                autoPlay 
                controls 
                style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} 
              />
            ) : (
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title} 
                style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} 
              />
            )}
            <h3 style={{ color: 'var(--accent-gold)', marginTop: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
              {selectedMedia.title}
            </h3>
            <span style={{ color: 'var(--text-secondary)' }}>{selectedMedia.category}</span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Gallery;
