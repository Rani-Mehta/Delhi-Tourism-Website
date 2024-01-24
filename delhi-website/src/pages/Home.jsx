import React from 'react'

import HomeAbout from '../components/HomeAbout';
import HomeExplore from '../components/HomeExplore';
import Homevedio from '../components/Homevedio';

import HomeCuisine from '../components/HomeCuisine';

import Slider from '../components/Slider';


const Home = () => {
  return (
    <>
    
  <Slider/>
 <HomeAbout/>
 <HomeExplore/>
 <Homevedio/>

 <HomeCuisine/>

    </>
  )
}

export default Home;
