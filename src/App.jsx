import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Prevent right-click on images and videos
    const disableContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
