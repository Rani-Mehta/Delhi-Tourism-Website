import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import FestivalsCelebrations from './pages/FestivalsCelebrations';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TraditionalCuisine from './pages/TraditionalCuisine';
import Artscratspage from './pages/Artscratspage';
import ShoppingMarketpage from './pages/ShoppingMarketpage';
import Contactpage from './pages/Contactpage';
import PageNightlife from './pages/PageNightlife';




function App() {
  return (
    <div className="App">
<Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  <Route path="/FestivalsCelebrations" element={<FestivalsCelebrations />} />
  <Route path="/TraditionalCuisine" element={<TraditionalCuisine/>} />
  <Route path="/Artscratspage" element={<Artscratspage/>}/>
  <Route path='/ShoppingMarketpage' element={<ShoppingMarketpage/>}/>
  <Route path='/Contactpage' element={<Contactpage/>}/>
  <Route path='/PageNightlife' element={<PageNightlife/>}/>
</Routes>
<Footer/>
</div>
  );
}

export default App;
