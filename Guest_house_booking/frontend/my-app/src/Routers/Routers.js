import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Room from '../Pages/Room';
import RoomDetails from '../Pages/RoomDetails';
import SearchResults from '../Pages/SearchResults';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/rooms' element={<Room />} />
      <Route path='/register' element={<Register />} />
      <Route path='/rooms/:id' element={<RoomDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/rooms/search' element={<SearchResults />} />
    </Routes>
  );
};

export default Routers;
