import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from './User'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">
                Calendario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/user">

              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}