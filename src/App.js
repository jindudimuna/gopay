import './App.css';
import React from 'react';
import NavBar from './data/Navbar';
import Hero from './pages/hero';
import About from './pages/about';
import Uses from './pages/Uses';
import Review from './data/Review';
function App() {
  return (

 <div>
 <NavBar />
 <Hero />
 <About />
 <Uses />
 <Review />
 </div>



  );
}

export default App;
