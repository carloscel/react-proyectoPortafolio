import React, { useEffect, useState } from 'react';
import { Experiences } from './components/Experiences';
import {PersonalInfo} from './components/PersonalInfo';
import {Skill} from './components/Skill'

export const App = () => {

  const [userStateInfo, setUserStateInfo] = useState({});
  const [skillsStateInfo, setSkillsStateInfo] = useState([]);
  const [experienState, setExperienState] = useState({})

  const readUser = async() => {

    const url = `http://localhost:3001/user`;
    const resp = await fetch (url);
    const {personalInfo, skills, experiences} = await resp.json();
    
    if(personalInfo && skills ){
      
    setUserStateInfo(personalInfo)
    setSkillsStateInfo( skills)
    setExperienState(experiences)
    }
  }

  useEffect(() => {
    readUser();
  },[]);

  return (
    <div className='container-app'>
      <PersonalInfo userStateInfo={userStateInfo} />
      <Skill skillsStateInfo={skillsStateInfo} />
      <Experiences experienState={experienState}/>
    </div>
  );
};



