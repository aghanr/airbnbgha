import React from 'react';
import Welcome from './pages/Welcome'

import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';

import Location from './pages/Location';
import DetailLocation from './pages/DetailLocation';
import RoomByLoc from './pages/RoomByLoc';
import RoomByGeo from './pages/RoomByGeo';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/location" element={<Location />} />
        <Route path="/detail_location/:param" element={<DetailLocation />} />
        <Route path="/room_by_loc" element={<RoomByLoc />} />
        <Route path="/room_by_geo" element={<RoomByGeo />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <MdGroup className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
