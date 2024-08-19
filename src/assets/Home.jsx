import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './home.css';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Stats from './Stats';

function Home() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 450);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobileView) {
    return (
      <div className='construction-message'>
        <h1>Site Under Construction</h1>
      </div>
    );
  }

  return (
    <>
      <div className='Home'>
        <Navbar />
        <div className='Hero'>
          <video style={{ width: '80%' }} controls autoPlay muted loop>
            <source src="/0001-0242.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Skills />
      <Projects />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
