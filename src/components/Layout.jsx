import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container'>
        <div className="navbar">
            <h1 className="logo">Movkraft</h1>
            <div className="actions">
                <Link to='/'>Home</Link>
                <Link to='/watchlist'>Watchlist</Link>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
