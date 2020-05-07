import React from 'react';

//Title
import Title from '../Utils/Title'

//HOC
import Aux from '../hoc/'

//Projects Component
import Project from './Projects'

//Images Background
import ImageProjectJubas from '../../assets/images/customerJubas.png'

//Material UI React
import Grid from '@material-ui/core/Grid'

const Customers = () => {
    return (
        <Aux>
            <Title>customers projects</Title>
            <Grid container spacing={3}>

                <Grid item>
                    <Project
                        projectName="Juba's Barbearia"
                        projectDescription="Project in final process of development to my customer and friend. Institucional barbershop website"
                        repositoryLink="https://github.com/dieezs/Juba-sBarbearia"
                        projectOnFly=""
                        imageProject={ImageProjectJubas}
                    />
                </Grid>

            </Grid>
        </Aux>
    )
}

export default Customers