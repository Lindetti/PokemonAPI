import { useState,  useEffect } from 'react'
import './App.css'
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from  "./Components/Footer";

function App() {

  return (
    <div className="wrapper">
<Header />
<Card />
<Footer />
    </div>
  )
}

export default App
