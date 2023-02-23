import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

import './navbar.css'


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="nav Logo" />
            </Link>
            <ul className={
            `${isNavShowing ? 'show__Nav nav__links' : 'hide__Nav nav__links'}` } >
              {
                links.map(({name, path}, index) => {
                  return (
                    <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : 
                    ''}  onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>

            <button className="nav__toggle_btn" onClick={() => setIsNavShowing(prev => !prev)}>
              {
                isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
              }

            </button>
        </div>
    </nav>
  )
}

export default Navbar