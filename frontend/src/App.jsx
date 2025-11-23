import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Prediction from './pages/Prediction';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/predict' element={<Prediction/>}/>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
