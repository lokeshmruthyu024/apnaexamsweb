import React from 'react'
import Logo from '../../assets/Logo.png'
import { FaBlog, FaHome, FaUser } from 'react-icons/fa'
import { TbFiles } from 'react-icons/tb'
import { FaPeopleLine } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className='container'>
      <div className="row my-1">
        <div className="col-md-2 ">
          <img src={Logo} alt="" />
        </div>
        <div className="col-md-7">
          <ul className='nav-class'>
            <li><a href=""><FaHome />Home</a></li>
            <li><a href="" ><FaUser />About Us</a></li>
            <li><a href="" ><TbFiles />Exam packages</a></li>
            <li><a href="" ><FaPeopleLine />Live Exams</a></li>
            <li><a href="" ><FaHome />Services</a></li>
            <li><a href=""><FaBlog />Blogs</a></li>
          </ul>
        </div>
        <div className="col-md-3 my-4">
          <div className="header-buttons">
            <button className="login-btn">Member Login</button>
            <button className="phone-btn ">
              <span className="me-1">📞</span>
              +91 8886100031
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
