import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from '../src/Screens/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='*' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>   
    </div>
  );
}

export default App;
