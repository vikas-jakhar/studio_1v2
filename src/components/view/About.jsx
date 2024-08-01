import React from 'react'
import AboutHeader from '../AboutHeader'
import ImageSlider from '../ImageSlider'
import Gaming from '../Gaming'
import Mission from '../Mission'
import Featured from '../Featured'

const About = () => {
    return (
        <div>
            <AboutHeader />
            <ImageSlider />
            <Gaming />
            <Mission />
            <Featured heading="Meet Our Team" />
        </div>
    )
}

export default About
