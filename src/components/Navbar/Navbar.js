import {Search} from "@material-ui/icons";
import {Notifications} from "@material-ui/icons";
import {ArrowDropDown} from "@material-ui/icons";
import React, {useState} from "react";
import './navbar.scss'
const Navbar = () => {
  const [isScrolled , setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true); 
    return () => (window.onscroll = null );
  }
  return(
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className='left'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className='right'>
          <Search className='icon'/>
          <span>KID</span>
          <Notifications className='icon'/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0etp0uSJFItt5dtnARUT8lQumCtz6Vg0pQ&usqp=CAU" alt="" />
          <div className='profile'>
            <ArrowDropDown className='icon'/>
            <ul className='options'>
              <li className='option-item'>Setting</li>
              <li className='option-item'>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar; 
