import React, { useContext } from 'react';
import './Projects.styles.scss';
import image from '../../assets/website-1.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { ThemeContext } from '../../context/ThemeContext';

function Projects() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`projects ${dark ? 'dark' : 'light'}`}>
      <h1 className={`title ${dark ? 'dark' : 'light'}`}>Projects</h1>
      <div className="container">
        <div className={`card ${dark ? 'dark' : 'light'}`}>
          <div className="image">
            <img src={image} />
          </div>
          <h3 className="card-title">Project Name</h3>
          <p className="description">
            Sit laboris officia pariatur elit elit consectetur reprehenderit
            pariatur.
          </p>
          <div className="icons">
            <AiFillGithub
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
            <SiNetlify
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
          </div>
        </div>

        <div className={`card ${dark ? 'dark' : 'light'}`}>
          <div className="image">
            <img src={image} />
          </div>
          <h3 className="card-title">Project Name</h3>
          <p className="description">
            Sit laboris officia pariatur elit elit consectetur reprehenderit
            pariatur.
          </p>
          <div className="icons">
            <AiFillGithub
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
            <SiNetlify
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
          </div>
        </div>

        <div className={`card ${dark ? 'dark' : 'light'}`}>
          <div className="image">
            <img src={image} />
          </div>
          <h3 className="card-title">Project Name</h3>
          <p className="description">
            Sit laboris officia pariatur elit elit consectetur reprehenderit
            pariatur.
          </p>
          <div className="icons">
            <AiFillGithub
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
            <SiNetlify
              size={30}
              className={`icon ${dark ? 'dark' : 'light'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
