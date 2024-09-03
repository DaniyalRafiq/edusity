import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about' id='about' >
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing Tomorrow's Leader Today</h2>
                <p>Emberk on a tronstormative ecucational lourney with our university's comorehensme
                    educetion orcarams. Our cuttina-edce curriculum is desioned to emboyier students.
                    with the knowledge, skills, and experiences needed to excel in the dynamic field of
                    education</p>
                <p>With a focus on innovation, hands-on learning, and personalized mentorship, our
                    programs prepare aspiring educators to make a meaningful impact in classrooms,
                    schools, ane communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational
                    leader, our diverse rande of procrams oners the pertect oathway to achieve your
                    goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About
