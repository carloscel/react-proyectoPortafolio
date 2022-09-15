import React, { useEffect, useState } from 'react';
import { user } from './api/Server';
import { Blogs } from './components/Blogs';
import { Experiences } from './components/Experiences';
import { Hobbie } from './components/Hobbie';
import {PersonalInfo} from './components/PersonalInfo';
import { Projects } from './components/Projects';
import { SeparatorBlog } from './components/SeparatorBlog';
import { SeparatorProject } from './components/SeparatorProject';
import {Skill} from './components/Skill';

export const App = () => {

  const [userStateInfo, setUserStateInfo] = useState({});
  const [skillsStateInfo, setSkillsStateInfo] = useState([]);
  const [experienState, setExperienState] = useState({});
  const [separatorProject, setSeparatorProject] = useState({});
  const [useProjects, setUseProjects] = useState([]);
  const [buttonState, setButtonState] = useState({});
  const [hobbieState, setHobbieState] = useState([]);
  const [separatorBlogs, setSeparatorBlogs] = useState({});
  const [blogState, setBlogState] = useState({});

  
  const readUser = async() => {

    try{
      /*
      const url = `http://localhost:3001/user`;
      const resp = await fetch (url);
      const {personalInfo, skills, experiences, separatorProject, projects, button, hobbies, separatorBlogs, blogs} = await resp.json();
      */

      const {personalInfo, skills, experiences, separatorProject, projects, button, hobbies, separatorBlogs, blogs} = user;

      setUserStateInfo(personalInfo)
      setSkillsStateInfo( skills)
      setExperienState(experiences)
      setSeparatorProject(separatorProject)
      setUseProjects(projects)
      setButtonState(button)
      setHobbieState(hobbies)
      setSeparatorBlogs(separatorBlogs)
      setBlogState(blogs)

    }catch(error){
      console.log(error)
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
        <Hobbie hobbieState={hobbieState}/>
      </div>
      <div className='seconColum'>
        <Skill skillsStateInfo={skillsStateInfo} />
        <SeparatorProject separatorProject={separatorProject}/>
        <Projects 
          useProjects={useProjects}
          buttonState={buttonState}
        />
        <SeparatorBlog separatorBlogs={separatorBlogs}/>
        <Blogs blogState={blogState} />
      </div>
      
    </div>
  );
};



