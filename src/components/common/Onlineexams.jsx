import React from 'react'
import Styles from './Online.module.css'
import { AiFillGift } from 'react-icons/ai'
import online1 from '../../assets/online1.png'
import online2 from '../../assets/online2.png'
import online3 from '../../assets/online3.png'
import online4 from '../../assets/online4.png'
const Onlineexams = () => {
  return (
    <section className='container mt-1 d-flex flex-column'>
      <div className={Styles.mainheading}>
        <h2 className='text-center'>
          <span className={Styles.clr1}><AiFillGift />Online Exams</span>
          <span className={Styles.clr2}> Benefits</span>
        </h2>
        <span className={Styles.line}></span>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 ">
            <img src={online1} className='images-exams' alt="" />
            <p style={{ fontSize: '16px' }}>Trusted Site for online Mock Tests.</p>
          </div>
          <div className="col-md-3">
            <img src={online2} className='images-exams' alt="" />
            <p style={{ fontSize: '16px' }}>More number of Study materials available online on our website for preparation.</p>
          </div>
          <div className="col-md-3">
            <img src={online3} className='images-exams mt-3' alt="" />
            <p style={{ fontSize: '16px' }}>The most trusted services Our Apna Exams brand</p>
          </div>
          <div className="col-md-3">
            <img src={online4} className='images-exams' alt="" />
            <p style={{ fontSize: '16px' }}>Certified Faculties available to clear the doubts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Onlineexams
