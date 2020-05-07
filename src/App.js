import React, { useState, useRef } from 'react';

//CSS
import './App.css'
import 'typeface-roboto';

//React UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';

//My picture
import MyPhoto from './assets/images/me.jpg'

//Pages
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Customers from './components/Customers'

//Icons
import { AiOutlineInstagram as Instagram } from 'react-icons/ai'
import { AiOutlineGithub as Github } from 'react-icons/ai'
import { AiFillLinkedin as Linkedin } from 'react-icons/ai'

const App = () => {

    const [renderContent, setRenderContent] = useState(<About />)
    const [linkAnterior, setLinkAnterior] = useState()

    const itemAbout = useRef(null)
    const itemEducation = useRef(null)
    const itemExperience = useRef(null)
    const itemSkills = useRef(null)
    const itemProjects = useRef(null)
    const itemCustomers = useRef(null)

    const changeContent = (page, ref) => {

        if (linkAnterior !== undefined) {
            linkAnterior.current.className = 'listAboutMe'
        }

        ref.current.className = 'listAboutMe active'
        setLinkAnterior(ref)
        setRenderContent(page)
    }

    return (
        <Grid container spacing={0}>
            <Grid item lg={3} xs={3} sm={3} className="menuLeftSide" align="center">

                    <div className="contentMenu">
                        <Hidden xsDown><img src={MyPhoto} width="150" className="myPhoto" alt="Diego Souza"></img></Hidden>
                        <p><span role="img" aria-label="Emoji">👨🏽‍💻</span></p>
                        <Hidden xsDown>
                        <ul>
                            <li> <a href="#!" className="listAboutMe" ref={itemAbout} onClick={() => { changeContent(<About />, itemAbout) }}>About me</a>     </li>
                            <li> <a href="#!" className="listAboutMe" ref={itemEducation} onClick={() => { changeContent(<Education />, itemEducation) }}>Education</a>    </li>
                            <li> <a href="#!" className="listAboutMe" ref={itemExperience} onClick={() => { changeContent(<Experience />, itemExperience) }}>Experience</a>   </li>
                            <li> <a href="#!" className="listAboutMe" ref={itemSkills} onClick={() => { changeContent(<Skills />, itemSkills) }}>Skills</a>       </li>
                            <li> <a href="#!" className="listAboutMe" ref={itemProjects} onClick={() => { changeContent(<Projects />, itemProjects) }}>Projects</a>     </li>
                            <li> <a href="#!" className="listAboutMe" ref={itemCustomers} onClick={() => { changeContent(<Customers />, itemCustomers) }}>Customers</a>    </li>
                        </ul>
                        </Hidden>
                    </div>

                    <Hidden smUp>
                        <a href="#!" className="listAboutMe" ref={itemAbout} onClick={() => { changeContent(<About />, itemAbout) }}>About me</a><br/>
                        <a href="#!" className="listAboutMe" ref={itemEducation} onClick={() => { changeContent(<Education />, itemEducation) }}>Education</a>  <br/>
                        <a href="#!" className="listAboutMe" ref={itemExperience} onClick={() => { changeContent(<Experience />, itemExperience) }}>Experience</a> <br/>
                        <a href="#!" className="listAboutMe" ref={itemSkills} onClick={() => { changeContent(<Skills />, itemSkills) }}>Skills</a>     <br/>
                        <a href="#!" className="listAboutMe" ref={itemProjects} onClick={() => { changeContent(<Projects />, itemProjects) }}>Projects</a>     <br/>
                        <a href="#!" className="listAboutMe" ref={itemCustomers} onClick={() => { changeContent(<Customers />, itemCustomers) }}>Customers</a>   <br/>
                    </Hidden>

                <ul className="socialMedia">
                    <Tooltip title="Instagram"><li><a href="https://www.instagram.com/dieezs/" target="_blank" rel="noopener noreferrer"><Instagram size={30} /></a></li></Tooltip>
                    <Tooltip title="Linkedin"><li><a href="https://www.linkedin.com/in/diegozs/" target="_blank" rel="noopener noreferrer"><Linkedin size={30} /></a></li></Tooltip>
                    <Tooltip title="Github"><li><a href="https://github.com/dieezs" target="_blank" rel="noopener noreferrer"><Github size={30} /></a></li></Tooltip>
                </ul>
            </Grid>


            <Grid item lg={9} xs={9} sm={9} className="pageComponent">
                <Container>
                    {renderContent}
                </Container>
            </Grid>

        </Grid>
    );
}

export default App;
