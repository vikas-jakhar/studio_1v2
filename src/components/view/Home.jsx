import React from 'react'
import Clients from '../Clients'
import Hero from '../Hero'
import ImageSlider from '../ImageSlider'
import About from '../About'
import Featured from '../Featured'
import Impact from '../Impact'
import Accordion from '../Accordion'

const Home = () => {
    return (
        <div>
            <Hero />
            <ImageSlider />
            <About />
            <Featured heading="Featured Projects" />
            <Impact />
            <Clients />
            <Accordion />
        </div>
    )
}

export default Home
