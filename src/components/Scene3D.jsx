import React from 'react';

const Scene3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Pure CSS Glowing Orbs for Zero Scroll Lag */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      <style>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          animation: floatOrb 20s infinite alternate ease-in-out;
          will-change: transform;
        }
        .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(212, 175, 55, 0.25); /* Gold glow */
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 500px;
          height: 500px;
          background: rgba(59, 130, 246, 0.15); /* Soft Blue glow */
          bottom: -150px;
          right: -100px;
          animation-delay: -7s;
        }
        .orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          top: 30%;
          left: 50%;
          animation-delay: -14s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 80px) scale(1.1); }
          100% { transform: translate(-30px, 40px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};

export default Scene3D;
