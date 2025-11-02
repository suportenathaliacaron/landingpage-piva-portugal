import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Audience from './components/Audience';
import Mentor from './components/Mentor';
import Alumni from './components/Alumni';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';
import PoliticaPrivacidade from './src/pages/politica-de-privacidade';

const App: React.FC = () => {
  const path = window.location.pathname;

  if (path === '/politica-de-privacidade') {
    return <PoliticaPrivacidade />;
  }

  return (
    <div className="bg-zinc-900 text-gray-200">
      <Header />
      <main>
        <About />
        <Audience />
        <Mentor />
        <Alumni />
        <Location />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
