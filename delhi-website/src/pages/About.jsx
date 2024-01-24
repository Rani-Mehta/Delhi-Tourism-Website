import React from 'react'
import ReuseComponents from '../components/ReuseComponents';
import HomeAbout from './../components/HomeAbout';
import GlimpsesAbout from '../components/GlimpsesAbout';
import Homevedio from './../components/Homevedio';


const About = () => {
  return (
    <>
   
      <ReuseComponents/>
      <HomeAbout/>
      <GlimpsesAbout/>
      <div className='pb-120'>
      <Homevedio/>
      </div>

    </>
  )
}

export default About;
