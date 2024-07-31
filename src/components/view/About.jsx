import React from 'react'
import AboutHeader from '../AboutHeader'
import ImageSlider from '../ImageSlider'
import Featured from '../Featured'
import Gaming from '../Gaming'
import Mission from '../Mission'

const About = () => {
    return (
        <div>
            <AboutHeader />
            <ImageSlider />
            <Gaming />
            <Mission />
            <Featured />
        </div>
    )
}

export default About
