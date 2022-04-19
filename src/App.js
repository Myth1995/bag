import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Home/Hero';
import Beyond from './components/Home/Beyond';
import Bag from './components/Home/Bag';
import MindMap from './components/Home/MindMap';
import Bags from './components/Home/Bags';
import Teams from './components/Home/Teams';
import Faq from './components/Home/Faq';
// import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Beyond />
      <Bag />
      <MindMap />
      <Bags />
      <Teams />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
