import React, { useState } from 'react';

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

    const [renderContent, setRenderContent] = useState(<Experience />)

    const changeContent = (page) => {
        setRenderContent(page)
    }

    return (
        <Grid container spacing={0}>
            <Grid item lg={3} className="menuLeftSide" align="center">

                <div className="contentMenu">
                    <img src={MyPhoto} width="150" className="myPhoto" alt="Diego Souza"></img>
                    <p><span role="img" aria-label="Emoji">👨🏽‍💻</span></p>
                    <ul>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<About />) }}>About me</a>     </li>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<Education />) }}>Education</a>    </li>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<Experience />) }}>Experience</a>   </li>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<Skills />) }}>Skills</a>       </li>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<Projects />) }}>Projects</a>     </li>
                        <li> <a href="#!" className="listAboutMe" onClick={() => { changeContent(<Customers />) }}>Customers</a>    </li>
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
