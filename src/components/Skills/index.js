import React from 'react';
import './style.css'

//Utils
import Title from '../Utils/Title'

//React UI Components
import Tooltip from '@material-ui/core/Tooltip'

//HOC
import Aux from '../hoc/'

//ICONS
import { AiFillHtml5 as HTML } from 'react-icons/ai'
import { DiCss3 as CSS } from 'react-icons/di'
import { DiJavascript1 as Javascript } from 'react-icons/di'
import { DiMaterializecss as Materialize } from 'react-icons/di'
import { DiReact as ReactJS } from 'react-icons/di'
import { DiNodejsSmall as NodeJS } from 'react-icons/di'
import { DiJira as Jira } from 'react-icons/di'
import { DiGit as Git } from 'react-icons/di'
import { DiGithubBadge as Github } from 'react-icons/di'
import { DiLinux as Linux } from 'react-icons/di'
import { DiWindows as Windows } from 'react-icons/di'
import { DiMongodb as MongoDB } from 'react-icons/di'
import { DiNpm as NPM } from 'react-icons/di'
import { DiVisualstudio as VisualStudio } from 'react-icons/di'
import { DiHeroku as Heroku } from 'react-icons/di'

const Skills = () => {
    return (
        <Aux>
            <Title>Skills</Title>

            <p className="titleSkills">programming language</p>
            <Tooltip title="HTML 5">
                <span><HTML size={40} id="htmlIcon"/></span>
            </Tooltip>

            <Tooltip title="CSS3">
                <span><CSS size={40} id="cssIcon" /></span>
            </Tooltip>

            <Tooltip title="Javascript">
                <span><Javascript size={40} id="javascriptIcon" /></span>
            </Tooltip>

            <Tooltip title="MaterializeCSS">
                <span><Materialize size={40} id="materializeIcon" /></span>
            </Tooltip>

            <Tooltip title="ReactJS">
                <span><ReactJS size={40} id="reactjsIcon"/></span>
            </Tooltip>

            <Tooltip title="NodeJS">
                <span><NodeJS size={40} id="nodejsIcon" /></span>
            </Tooltip>

            <Tooltip title="MongoDB">
                <span><MongoDB size={40} id="mongoDBIcon" /></span>
            </Tooltip>
            
            <div><br/></div>

            <p className="titleSkills">tools</p>
            <Tooltip title="Jira">
                <span><Jira size={40} id="jiraIcon" /></span>
            </Tooltip>

            <Tooltip title="Git">
                <span><Git size={40} id="gitIcon" /></span>
            </Tooltip>

            <Tooltip title="Github">
                <span><Github size={40} id="githubIcon" /></span>
            </Tooltip>

            <Tooltip title="NPM package manager">
                <span><NPM size={40} id="npmIcon" /></span>
            </Tooltip>
            
            <div><br/></div>

            <p className="titleSkills">others</p>
            <Tooltip title="Linux">
                <span><Linux size={40}/></span>
            </Tooltip>

            <Tooltip title="Windows">
                <span><Windows size={40} id="windowIcon" /></span>
            </Tooltip>

            <Tooltip title="Visual Studio Code">
                <span><VisualStudio size={40} id="visualIcon" /></span>
            </Tooltip>

            <Tooltip title="Heroku">
                <span><Heroku size={40} id="herokuIcon" /></span>
            </Tooltip>

        </Aux>
    )
}

export default Skills