import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navigation/Navbar';
import Gallery from './component/Pages/Gallery';
import Contact from './component/Pages/Contact'; 

import './App.css';
// import FoodCollection from './component/Pages/FoodCollection';

function App() {
 const [searchResults, setSearchResults] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchResults(searchTerm);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar  onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Gallery searchResults={searchResults} />} />
          {/* <Route path="/Food" element={<FoodCollection />} /> */}
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
