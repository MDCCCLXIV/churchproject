import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import MoreVideos from '../features/videos/MoreVideos'
import Connections from '../components/connections/Connections'
// import GroupCards from '../components/connections/GroupCards'
import About from '../components/about/About'
// import Newsletter from './components/newsletter/Newsletter';
import Newsletter from '../components/newsletter/Newsletter'
import Welfare from '../components/welfare/Welfare'
// import Menu from '../components/menu/Menu'

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <About />
      <Services />
      <MoreVideos />
      <Connections />
      <Welfare />
      <Newsletter />

    

        
    </div>
  )
}

export default Home