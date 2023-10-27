// import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from "react-router"

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { AboutUs } from "./components/AboutUs"
import { Resources } from './components/Resources'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
import { Locator } from './components/Locator'
import { All } from './components/All'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/locator" element={<Locator />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      {/* <Header />
      <Home />
      <AboutUs />
      <Resources />
      <Locator />
      <ContactUs />
      <Footer /> */}
      <Footer />
    </>
  )
}

export default App
