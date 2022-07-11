import React from 'react'
import '../App.css'
import Navigation from './Navigation'
import NewsContainer from './News/NewsContainer'
import Footer from './Footer'
import TopCompany from './Market/TopCompany'

function Home() {
    return (
        <div className='main-home'>
            <Navigation />
            <div className='main-body'>
                <div className='main-body-news'>
                    <NewsContainer />
                </div>
                <div className='main-body-market'>
                    <TopCompany />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
