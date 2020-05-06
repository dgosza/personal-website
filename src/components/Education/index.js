import React from 'react';
import './style.css'

//Utils
import Title from '../Utils/Title'

//HOC
import Aux from '../hoc/'

//Material UI
import Typography from '@material-ui/core/Typography'

import { GrLocationPin } from 'react-icons/gr'

const Education = () => {
    return (

        <Aux>

            <Title>Education</Title>
            
            <Typography variant="h6" className="titleEducation">Software Engineering</Typography>
            <p className="locationEducation"> <GrLocationPin></GrLocationPin>Faculdade Impacta</p>
            <span className="subtitleEducation">Postgraduate</span><br/>
            <span>June 2019 - December 2020</span>

            <br/><br/><br/>

            <Typography variant="h6" className="titleEducation">Analysis and Systems Development</Typography>
            <p className="locationEducation"> <GrLocationPin></GrLocationPin>Faculdade Drummond</p>
            <span className="subtitleEducation">bachelor of technology</span><br/>
            <span>January 2017 - June 2019</span>

            <br/><br/><br/>

            <Typography variant="h6" className="titleEducation">Internet Computing</Typography>
            <p className="locationEducation"> <GrLocationPin></GrLocationPin>Etec Parque Belém - Centro Paula Souza</p>
            <span className="subtitleEducation">technician</span><br/>
            <span>June 2015 - January 2017</span>

        </Aux>


    )
}

export default Education;