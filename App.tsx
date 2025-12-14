
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ContentProvider } from './context/ContentContext';

const App: React.FC = () => {
  return (
    <ContentProvider>
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
    </ContentProvider>
  );
};

export default App;
