import React from 'react';
// import './style.css'

//Utils
import Title from '../Utils/Title'

//HOC
import Aux from '../hoc/'

//Material UI
import Typography from '@material-ui/core/Typography'

const Experience = () => {
    return (

        <Aux>

            <Title>Experience</Title>
            
            <Typography variant="h6" className="titleEducation">Junior Analyst</Typography>
            <span className="subtitleEducation">it commerce</span><br/>
            <span>June 2015 - January 2017</span>

            <br/><br/><br/>

            <Typography variant="h6" className="titleEducation">Young Apprentice</Typography>
            <span className="subtitleEducation">prevent senior</span><br/>
            <span>9 months</span>
            <p>Responsible for supporting the business area of ​​the company, managing stock, changing hardware equipment, format machines sent to the support and optimizing then.</p>

        </Aux>


    )
}

export default Experience;