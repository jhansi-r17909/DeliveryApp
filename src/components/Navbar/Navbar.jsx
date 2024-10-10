import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../../context/Context'

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount } = useContext(Context)

  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img src={assets.food_logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => { navigate("/") }} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => { navigate("/menu") }} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => { navigate("/mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => { navigate("/contact-us") }} className={menu === "contact-us" ? "active" : ""}>Contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">

          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
