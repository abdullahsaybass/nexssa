import { useState } from 'react'
import Header from './component/Header.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx'
import Order from './component/Order/Order.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      
    </Routes>
  )
}

export default App
