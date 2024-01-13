import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsPage from './pages/DetailsPage';
import SearchResults from './pages/SearchResults';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<DetailsPage/>} />
        <Route path="/search-results" element={<SearchResults/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
