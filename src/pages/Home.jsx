import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SubHeader from '../components/common/SubHeader'
import Caraousel from '../components/common/Caraousel'
import Onlineexams from '../components/common/Onlineexams'

const Home = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Caraousel />
      <Onlineexams />
      <Footer />
    </div>
  )
}

export default Home
