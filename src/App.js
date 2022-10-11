import './App.css';
import React from 'react';
import NavBar from './data/Navbar';
import Hero from './pages/hero';
import About from './pages/about';
import Uses from './pages/Uses';
import Review from './data/Review';
import Faq from './pages/Faq';
import Hero2 from './pages/Hero2';
function App() {
  return (

 <div>
 <NavBar />
 <Hero />
 <About />
 <Uses />
 <Review />
 <Faq />
 <Hero2 />
 </div>



  );
}

export default App;
