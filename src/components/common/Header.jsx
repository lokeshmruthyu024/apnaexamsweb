import React from 'react'
import Logo from '../../assets/Logo.png'
const Header = () => {
  return (
    <div className='container'>
      <div className="row my-1">
        <div className="col-md-2">
          <img src={Logo} alt="" />
        </div>
        <div className="col-md-6">
          <ul className='d-flex justify-content-between align-items-center my-4 list-unstyled'>
            <li className=''>🏡Home</li>
            <li>👤About us</li>
            <li>📄Exam Packages</li>
            <li>📜Live Exams</li>
            <li>🤼Services</li>
            <li>🌏Blog</li>
          </ul>
        </div>
        {/* <div className="col-md-2">
        </div> */}
        <div className="col-md-4">
          <div className="d-flex">
            <button className='text-white p-2 rounded-2 my-3 border-0 fw-bold' style={{ backgroundColor: '#2abfa4' }}>👤 Member Login</button>
            <div className='my-4 mx-1 p-1 rounded' style={{ backgroundColor: '#004f9e' }}>📞</div>
            <div className='text-white my-4 p-1 rounded' style={{ backgroundColor: '#004f9e' }}>+91 8886100031</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
