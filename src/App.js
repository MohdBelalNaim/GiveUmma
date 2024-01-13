import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeNavbar from './components/HomeNavbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
