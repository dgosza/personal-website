import React from 'react';
import './style.css'

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
            <span className="subtitleEducation">it commerce | current</span><br />
            <p>
                <span className="customerExperience">Arcos Dorados | Project: Enterprise Architecture</span><br />
                <span className="textExperience">Drawing low and high level of integrations between systems at Arcos Dorados SLAD/NOLAD, responsible for managing the view at portal
                web for collaborators, detailing of applications(which servers are installed, which business area utilize that application, who's responsible, programming language, etc.) and experience with tool of Enterprise Architecture named Qualiware
                </span>
            </p>

            <p>
                <span className="customerExperience">Prevent Senior | Project: Support | 11 months</span><br />
                <span className="textExperience">Support the users and solve their problem calls on Jira Servicedesk. Creation, validation, and management of users in portal web Prevent Senior,
                software installation by demand, validation of software licenses,technical support by presencial or call, managing stock, formating machines sent to support and optimizing then
                </span>
            </p>



            <br />

            <Typography variant="h6" className="titleEducation">Young Apprentice</Typography>
            <span className="subtitleEducation">prevent senior | 9 months</span><br />
            <p className="textExperience">Responsible for supporting the business area of ​​the company, managing stock, changing hardware equipment, format machines sent to the support and optimizing then.</p>

        </Aux >


    )
}

export default Experience;