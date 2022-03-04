import React, { useContext } from 'react';
import './Card.styles.scss';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { ThemeContext } from '../../context/ThemeContext';

function Card({ title, image, description }) {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`card ${dark ? 'dark' : 'light'}`}>
      <div className="image">
        <img className="project-image" src={image} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="description">{description}</p>
      <div className="icons">
        <AiFillGithub size={30} className={`icon ${dark ? 'dark' : 'light'}`} />
        <SiNetlify size={30} className={`icon ${dark ? 'dark' : 'light'}`} />
      </div>
    </div>
  );
}

export default Card;
