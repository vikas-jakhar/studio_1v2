import React from 'react'
import Clients from '../Clients'
import Hero from '../Hero'
import ImageSlider from '../ImageSlider'
import Featured from '../Featured'
import Impact from '../Impact'
import Studio from '../Studio'
import Faq from '../Faq'

const Home = () => {
    return (
        <div>
            <Hero />
            <ImageSlider />
            <Studio />
            <Featured />
            <Impact />
            <Clients />
            <Faq />
        </div>
    )
}

export default Home
