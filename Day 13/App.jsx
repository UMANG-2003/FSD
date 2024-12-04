import React from 'react'
// import CounterApp from "./components/CounterApp";
import ImageApp from './components/ImageApp';
import Navbar from './components/Navbar';
import CounterApp from './components/CounterApp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return <>
    
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navbar></Navbar>}></Route>
     <Route path="/image" element={<ImageApp></ImageApp>}></Route>
     <Route path="/counter" element={<CounterApp></CounterApp>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  
}

export default App
