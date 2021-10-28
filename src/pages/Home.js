import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
   return (
      <>
         <Announcement/>
         <Navbar/>
         <Slider/>
         <Categories/>
         <Products/>
      </>
   )
}

export default Home
