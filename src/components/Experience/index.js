import React from 'react';
import './style.css'

//Utils
import Title from '../Utils/Title'

//HOC
import Aux from '../hoc/'

//Material UI
import Typography from '@material-ui/core/Typography'

//Icons
import { WiTime2 } from 'react-icons/wi'

const Experience = () => {
    return (

        <Aux>

            <Title>Experience</Title>

            <Typography variant="h6" className="titleEducation">Junior Analyst</Typography>
            <span className="subtitleEducation">it commerce</span><br />
            <>
                <span className="customerExperience">Customer: Arcos Dorados</span><br />
                <Typography variant="body2">Project: Enterprise Architecture</Typography>
                <Typography variant="body2" className="textExperience">drawing low and high level of integrations between systems at Arcos Dorados SLAD/NOLAD, responsible for managing the view at portal 
                web for collaborators, detailing of applications(which servers are installed, which business area utilize that application, who's responsible, programming language, etc.) and experience with tool of Enterprise Architecture named Qualiware
                </Typography>
                <span className="durationExperience"><WiTime2 className="iconExperience" />Duration: current</span><br />
            </>
            <>
                <span className="customerExperience">Customer: Prevent Senior</span><br />
                <Typography variant="body2">Project: Support</Typography>
                <Typography variant="body2" className="textExperience">Support the users and solve their problem calls on Jira Servicedesk. Creation, validation, and management of users in portal web Prevent Senior, 
                software installation by demand, validation of software licenses,technical support by presencial or call, managing stock, formating machines sent to support and optimizing then</Typography>
                <span className="durationExperience"><WiTime2 className="iconExperience" />Duration: 11 months</span><br />
            </>


            <br />

            <Typography variant="h6" className="titleEducation">Young Apprentice</Typography>
            <span className="subtitleEducation">prevent senior</span><br />
            <Typography variant="body2" className="textExperience">Responsible for supporting the business area of ​​the company, managing stock, changing hardware equipment, format machines sent to the support and optimizing then.</Typography>
            <span className="durationExperience"><WiTime2 className="iconExperience" />Duration: 9 months</span><br />

        </Aux >


    )
}

export default Experience;