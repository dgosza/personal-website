import React from 'react';
import './style.css'

//Utils
import Title from '../Utils/Title'

//HOC
import Aux from '../hoc/'

//Material UI
import Typography from '@material-ui/core/Typography'

const Education = () => {
    return (

        <Aux>

            <Title>Education</Title>
            
            <Typography variant="h6" className="titleEducation">Software Engineering</Typography>
            <span className="subtitleEducation">Postgraduate</span><br/>
            <span className="dateEducation">June 2019 - December 2020 | Faculdade Impacta</span>

            <br/><br/><br/>

            <Typography variant="h6" className="titleEducation">Analysis and Systems Development</Typography>
            <span className="subtitleEducation">bachelor of technology</span><br/>
            <span className="dateEducation">January 2017 - June 2019 | Faculdade Drummond</span>

            <br/><br/><br/>

            <Typography variant="h6" className="titleEducation">Internet Computing</Typography>
            <span className="subtitleEducation">technician</span><br/>
            <span className="dateEducation">June 2015 - January 2017 | ETEC Parque Belém - Centro Paula Souza</span>

        </Aux>


    )
}

export default Education;