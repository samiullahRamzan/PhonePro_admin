import React from 'react'
import { BiBookAlt, BiHome,BiSolidUserAccount,BiChat,BiLogIn,BiUserCircle, BiMessage} from 'react-icons/bi'
import { FaBuysellads } from "react-icons/fa";
import { BsFillPostcardFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom'

import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        
        <img src='../../public/phonePro.png' alt='phone pro logo' className='image' />
        <h2>PhonePro</h2>
      </div>

      <div className="menu--list">
        <NavLink to='/' className="item">
           <BiHome className='icon' />
           Dashboard
        </NavLink>
        <NavLink to='/users' className="item">
           <BiSolidUserAccount className='icon'/>
           Users
        </NavLink>
        <NavLink to='/ads' className="item">
           < FaBuysellads className='icon'/>
           Ads
        </NavLink>
        <NavLink to='/posts' className="item">
           <BsFillPostcardFill className='icon'/>
           Posts
        </NavLink>
        <NavLink to='/chat' className="item">
           <BiMessage className='icon'/>
           Chat
        </NavLink>
        <NavLink to='/logIn' className="item">
           <BiLogIn className='icon'/>
           LogIn
        </NavLink>
        <NavLink to='/profile' className="item">
           <BiUserCircle className='icon'/>
            Profile
        </NavLink>
    
      </div>
    </div>
  )
}

export default Sidebar
