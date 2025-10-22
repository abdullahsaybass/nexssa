import { useState } from 'react'
import Header from './component/Header.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx'
import Order from './component/Order/Order.jsx'
import About from './component/About/About.jsx'
import Service from './component/Service/Service.jsx'
import TermsAndCondition from './component/TC/Tc.jsx'
import Privacy from './component/Privacy/Privacy.jsx'
import Contact from './component/Contact/Conact.jsx'
import Warranty from './component/Warrenty/Warranty.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<About />} />
      <Route path="/serive" element={<Service />} />
      <Route path="/termsandcondtion" element={<TermsAndCondition />} />
      <Route path="/privacypolicy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/Warranty" element={<Warranty />} />
    </Routes>
  )
}

export default App
