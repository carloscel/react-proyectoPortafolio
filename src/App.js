import React, { useEffect, useState } from 'react';
import { Experiences } from './components/Experiences';
import {PersonalInfo} from './components/PersonalInfo';
import { Projects } from './components/Projects';
import { SeparatorProject } from './components/SeparatorProject';
import {Skill} from './components/Skill'

export const App = () => {

  const [userStateInfo, setUserStateInfo] = useState({});
  const [skillsStateInfo, setSkillsStateInfo] = useState([]);
  const [experienState, setExperienState] = useState({});
  const [separatorProject, setSeparatorProject] = useState({});
  const [useProjects, setUseProjects] = useState([]);

  const readUser = async() => {

    const url = `http://localhost:3001/user`;
    const resp = await fetch (url);
    const {personalInfo, skills, experiences, separatorProject, projects} = await resp.json();
    
    if(personalInfo && skills ){
      
    setUserStateInfo(personalInfo)
    setSkillsStateInfo( skills)
    setExperienState(experiences)
    setSeparatorProject(separatorProject)
    setUseProjects(projects)
    }
  }
  
  useEffect(() => {
    readUser();
  },[]);

  return (
    <div className='container-app'>
      <div className='firtsColum'>
        <PersonalInfo userStateInfo={userStateInfo} />
        <Experiences experienState={experienState} />
      </div>
      <div className='seconColum'>
        <Skill skillsStateInfo={skillsStateInfo} />
        <SeparatorProject separatorProject={separatorProject}/>
        <Projects useProjects={useProjects}/>
      </div>
      
    </div>
  );
};



