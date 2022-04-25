import React from 'react';
import About from '../../sections/about/About';
import Header from '../../sections/header/Header';
import Hero from '../../sections/hero/Hero';
import Resume from '../../sections/resume/Resume';
import Project from '../../sections/project/Project';

export default function Home() {
  return (
    <div className='home-page'>
        <Header/>
        <Hero/>
        <About/>
        <Resume/>
        <Project/>
    </div>
  )
}
