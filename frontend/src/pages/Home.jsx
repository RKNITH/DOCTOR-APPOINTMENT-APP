import React from 'react'
import Header from '../components/Header.jsx'
import SpecialityMenu from '../components/SpecialityMenu.jsx'
import TopDoctors from '../components/TopDoctors.jsx'
import Banner from '../components/Banner.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <TopDoctors />
            <Banner />

        </div>
    )
}

export default Home