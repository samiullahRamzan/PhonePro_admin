import React from 'react'
import { BiBookAlt, BiHome,BiSolidUserAccount,BiChat,BiLogIn,BiUserCircle, BiMessage} from 'react-icons/bi'
import { FaBuysellads } from "react-icons/fa";
import { BsFillPostcardFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt className='logo-icon'/>
        <h2>PhonePro</h2>
      </div>

      <div className="menu--list">
        <Link to='/' className="item">
           <BiHome className='icon' />
           Dashboard
        </Link>
        <Link to='/' className="item">
           <BiSolidUserAccount className='icon'/>
           Users
        </Link>
        <Link to='/' className="item">
           < FaBuysellads className='icon'/>
           Ads
        </Link>
        <Link to='/' className="item">
           <BsFillPostcardFill className='icon'/>
           Posts
        </Link>
        <Link to='/' className="item">
           <BiMessage className='icon'/>
           Chat
        </Link>
        <Link to='/' className="item">
           <BiLogIn className='icon'/>
           LogIn
        </Link>
        <Link to='/' className="item">
           <BiUserCircle className='icon'/>
            Profile
        </Link>
    
      </div>
    </div>
  )
}

export default Sidebar
