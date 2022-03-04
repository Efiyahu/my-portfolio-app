import React, { useContext } from 'react';
import './Projects.styles.scss';
import image from '../../assets/website-1.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { ThemeContext } from '../../context/ThemeContext';
import Card from '../../components/card/Card';

function Projects() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`projects ${dark ? 'dark' : 'light'}`}>
      <h1 className={`title ${dark ? 'dark' : 'light'}`}>Projects</h1>
      <div className="container">
        <Card
          title="Project Name"
          image={image}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
        <Card
          title="Project Name"
          image={image}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
        <Card
          title="Project Name"
          image={image}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
        <Card
          title="Project Name"
          image={image}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
      </div>
    </div>
  );
}

export default Projects;
