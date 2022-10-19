import React from 'react'
import Navbar from '../component/Navbar'
import Navbarr from '../component/Navbarr'
import Product from '../component/Product'
import News from '../component/News'
import Tk from '../component/Tk'
import Sd from '../component/Sd'
import Form from '../component/Form'


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Navbarr/>
     <News/>
     <Tk/>
     <Sd/>
     <Product/>
     <Form/>
    </div>
  )
}

export default Home
