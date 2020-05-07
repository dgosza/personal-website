import React from 'react';
import './style.css'

import Title from '../Utils/Title'

import Aux from '../hoc/'
import Typography from '@material-ui/core/Typography'

const About = () => {
    return (
        <Aux>
            <Title>diego magalhães de souza</Title>
            <span className="subtitleAbout">hello friend.</span>

            <p>Pro-active, responsible, resilient, and easy learning. Always looking for new knowledges and in love with Programming.<br/>
            Currently studying the javascript stack: ReactJS, NodeJS and MongoDB and I'm loving it!</p>
            <p>Apart from my professional life, I love doing gym, riding bike, and read some books of my interest.</p>

            <br/>

            <p>sci-fi and music are my life.</p>
        </Aux>

    )
}

export default About;