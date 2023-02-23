import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import './navbar.css'


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="nav Logo" />
            </Link>
            <ul className={
            `${isNavShowing ? 'show__Nav nav__links' : 'hide__Nav nav__links'}` } >
              {
                links.map(({name, path}, index) => {
                  return (
                    <li>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : 
                    ''}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>

            <button className="nav__toggle_btn">
              <GoThreeBars/>

            </button>
        </div>
    </nav>
  )
}

export default Navbar