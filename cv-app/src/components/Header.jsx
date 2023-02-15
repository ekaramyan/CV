import React, { Component } from 'react'


const Header = (pageTitle) => {
  return (
    <section className='header-nav' >
      <header>
        <a href='' className='logo'>Freelancer</a>
        <nav className='nav'>
          <ul className='nav__menu menu'>
            <li className='menu__item' onClick={pageTitle = 'Projects'}><a href='#projects'>Projects</a></li>
            <li className='menu__item' onClick={pageTitle = 'Skills'}><a href='#projects'>Skills</a></li>
            <li className='menu__item'><a href=''>Contacts</a></li>
          </ul>
        </nav>
      </header>
    </section >

  )
}
export default Header