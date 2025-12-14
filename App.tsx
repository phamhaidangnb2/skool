import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Vision />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;