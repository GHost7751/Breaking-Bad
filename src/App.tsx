import React from 'react';
import Header from './Layout/Header/Header';
import './app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Characters from './Components/Characters/Characters';
import Episodes from './Components/Episodes/Episodes';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <main>
      <Routes>
              <Route  path='/home' element={<Home />} />
              <Route  path='/characters' element={<Characters />} />
              <Route path='/episodes' element={<Episodes />} />
          </Routes> 
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


