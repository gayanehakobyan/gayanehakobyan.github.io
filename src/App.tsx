import { memo } from 'react';
import SidebarNav from 'components/SidebarNav';
import Hero from 'components/Hero';
import About from 'components/About';
import Work from 'components/Work';
import Experience from 'components/Experience';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <SidebarNav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default memo(App);
