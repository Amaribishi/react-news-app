import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './pages/Article'

  export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":article" element={<Article />} />
      </Routes>
      <Footer />
    </>
  )
}
