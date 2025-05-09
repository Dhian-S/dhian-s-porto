import React from 'react';
import Navbar from './blocks/Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Software from './pages/Software';
import Favorite from './pages/Favorite';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './blocks/Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Software/>
      <Favorite/>
      <Gallery/>
      <Contact/>
      <Footer/> 
    </>
  )
}

export default App