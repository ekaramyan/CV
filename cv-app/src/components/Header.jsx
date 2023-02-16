import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




const Header = (pageTitle) => {
  return (

    <section className='header-nav' >
      <header>
        <a href='#start' className='logo'>Freelancer</a>
        <nav className='nav'>
          <NavLink className='menu__item' to='/' href='#projects'> Projects</NavLink>
          <NavLink className='menu__item' to='/skills'>Skills</NavLink>
          <NavLink className='menu__item' to='/contacts'>Contacts</NavLink>
        </nav>

      </header>
    </section >


  )
}
export default Header