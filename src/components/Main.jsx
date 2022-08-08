import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Details';
import Layout from './Layout'
import MovieList from './MovieList';
import Watchlist from './Watchlist';

export default function Main() {
  return (
    <div className='main-container'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MovieList/>} />
            <Route path='watchlist' element={<Watchlist watchlist={[]}/>} />
            <Route path='details/:id' element={<Details/>} />
          </Route>
        </Routes>
    </div>
  )
}
