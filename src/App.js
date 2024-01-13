import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsPage from './pages/DetailsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<DetailsPage/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
