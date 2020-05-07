import React from 'react'
import './style.css'

//Utils
import Title from '../Utils/Title'

//Material UI
import Typography from '@material-ui/core/Typography'

//HOC
import Aux from '../hoc/'

const Projects = () => {
    return (
        <Aux>
            <Title>Projects</Title>

            <Typography variant="h6" className="titleProjects">Knowledge Base</Typography>
            <span className="subtitleProject">Done while i was at prevent senior</span>
            <p align="justify">The project consists of a web application that was possible to see a lot of information about technical things in each unity of Prevent Senior at São Paulo.
                The objective was has to have an intern application in area of Support, level 1 and 2, who's support the current problems on fly applications of Prevent Senior.
                In the application was possible to see information like: location of switch in each floor of unity such as information about the network itself, printer servers,
                network folders, informations about permissions conceded to users, informations about each unity such as responsible for that unity, responsible of IT departament, contact info, etc.
                Also, was developed a generator of shipping letter to Administrative IT Manager of Prevent Senior, optimizing the time and the manually process of doing these shipping letters
            </p>

        </Aux>
    )
}

export default Projects