import React from 'react';

// import NavBar from './components/navbar/NavBar'
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Best from "./components/best/Best"
import Featured from "./components/featured/Featured"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
