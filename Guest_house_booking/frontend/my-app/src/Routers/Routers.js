import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Room from '../Pages/Room';
import RoomDetails from '../Pages/RoomDetails';
import SearchResults from '../Pages/SearchResults';
import Thankyou from '../Pages/Thankyou';
import About from '../Pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/rooms' element={<Room />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<Thankyou/>} />
      <Route path='/rooms/:id' element={<RoomDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/rooms/search' element={<SearchResults />} />
      <Route path='/about' element={<About></About>}/>
    </Routes>
  );
};

export default Routers;
