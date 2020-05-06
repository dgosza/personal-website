import React, { useState, useRef } from 'react';

//CSS
import './App.css'
import 'typeface-roboto';

//React UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

//My picture
import MyPhoto from './assets/images/me.jpg'

//Pages
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Customers from './components/Customers'

const App = () => {

    const [renderContent, setRenderContent] = useState(<Skills />)
    const [linkAnterior, setLinkAnterior] = useState()

    const itemAbout = useRef(null)
    const itemEducation = useRef(null)
    const itemExperience = useRef(null)
    const itemSkills = useRef(null)
    const itemProjects = useRef(null)
    const itemCustomers = useRef(null)

    const changeContent = (page, ref) => {

        if(linkAnterior !== undefined){
            linkAnterior.current.className = 'listAboutMe'
        }

        ref.current.className = 'listAboutMe active'
        setLinkAnterior(ref)
        setRenderContent(page)
    }

    return (
        <Grid container spacing={0}>
            <Grid item lg={3} className="menuLeftSide" align="center">

                <div className="contentMenu">
                    <img src={MyPhoto} width="150" className="myPhoto" alt="Diego Souza"></img>
                    <p><span role="img" aria-label="Emoji">👨🏽‍💻</span></p>
                    <ul>
                        <li> <a href="#!" className="listAboutMe" ref={itemAbout} onClick={() => { changeContent(<About />, itemAbout) }}>About me</a>     </li>
                        <li> <a href="#!" className="listAboutMe" ref={itemEducation} onClick={() => { changeContent(<Education />, itemEducation) }}>Education</a>    </li>
                        <li> <a href="#!" className="listAboutMe" ref={itemExperience} onClick={() => { changeContent(<Experience />, itemExperience) }}>Experience</a>   </li>
                        <li> <a href="#!" className="listAboutMe" ref={itemSkills} onClick={() => { changeContent(<Skills />, itemSkills) }}>Skills</a>       </li>
                        <li> <a href="#!" className="listAboutMe" ref={itemProjects} onClick={() => { changeContent(<Projects />, itemProjects) }}>Projects</a>     </li>
                        <li> <a href="#!" className="listAboutMe" ref={itemCustomers} onClick={() => { changeContent(<Customers />, itemCustomers) }}>Customers</a>    </li>
                    </ul>
                </div>

            </Grid>


            <Grid item lg={9} xs={12} className="pageComponent">
                <Container>
                    {renderContent}
                </Container>
            </Grid>

        </Grid>
    );
}

export default App;
