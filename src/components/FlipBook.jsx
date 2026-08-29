import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const PageCover = forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard" style={{
      background: 'linear-gradient(135deg, #111, #222)',
      color: 'var(--accent-gold)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid var(--glass-border)'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', color: '#fff' }}>{props.children}</h2>
      <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ahmed Abdelaziz Eldeeb</p>
      <p style={{ fontWeight: 500, fontSize: '0.9rem', marginTop: '0.5rem', color: '#888' }}>Interactive Resume</p>
    </div>
  );
});

const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref} style={{
      background: 'rgba(15, 15, 15, 0.95)',
      color: '#eee',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      // Remove heavy shadows for performance
      boxShadow: 'none'
    }}>
      <div className="page-content" style={{ height: '100%', overflow: 'hidden' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          {props.title}
        </h3>
        <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#ccc' }}>
          {props.children}
        </div>
      </div>
      <div className="page-footer" style={{
        position: 'absolute',
        bottom: '1rem',
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#555'
      }}>
        {props.number}
      </div>
    </div>
  );
});

const FlipBook = ({ cvContent }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
      <HTMLFlipBook 
        width={450} 
        height={650}
        size="stretch"
        minWidth={315}
        maxWidth={550}
        minHeight={420}
        maxHeight={750}
        // Drastically reduce shadow computations
        maxShadowOpacity={0}
        showCover={true}
        mobileScrollSupport={true}
        // Force hardware acceleration and simpler rendering
        className="flip-book"
        style={{ willChange: 'transform' }}
      >
        <PageCover>Professional Profile</PageCover>
        
        <Page title="Executive Summary" number="1">
          {cvContent?.summary}
        </Page>

        <Page title="Core Competencies & Skills" number="2">
          {cvContent?.skills}
        </Page>
        
        <Page title="Experience (Present)" number="3">
          {cvContent?.experience1}
        </Page>

        <Page title="Experience (Past)" number="4">
          {cvContent?.experience2}
        </Page>
        
        <Page title="Key Projects" number="5">
          {cvContent?.projects}
        </Page>

        <Page title="Education & Languages" number="6">
          {cvContent?.education}
        </Page>

        <PageCover>Get in touch</PageCover>
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
