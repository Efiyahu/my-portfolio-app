import React, { useContext } from 'react';
import './Projects.styles.scss';
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { ThemeContext } from '../../context/ThemeContext';
import Card from '../../components/card/Card';
import quizicalPic from '../../assets/quizicalpic.jpg';
import eathWithUsPic from '../../assets/eatiwithus.jpg';

function Projects() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`projects ${dark ? 'dark' : 'light'}`}>
      <h1 className={`title ${dark ? 'dark' : 'light'}`}>Projects</h1>
      <div className="container">
        <Card
          title="Quizical"
          image={quizicalPic}
          description="React trivia quiz App implementing the Open Trivia API and React State managment and Hooks."
          netlify_url="https://quizicial.netlify.app"
          github_repo="https://github.com/Efiyahu/my-quiz-app.git"
        />
        <Card
          title="Eath With Us"
          image={eathWithUsPic}
          description="Recipe App using Forkify API created by Jonas Schmedtman. Implementing Firebase Auth/Firestore React
          Context API and useReducer hook."
          netlify_url="https://eatwithus.netlify.app"
          github_repo="https://github.com/Efiyahu/my-recipe-app"
        />
        <Card
          title="Project Name"
          image={quizicalPic}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
        <Card
          title="Project Name"
          image={quizicalPic}
          description="Id laborum sit dolor qui velit ea consequat irure Lorem ex commodo exercitation deserunt esse."
        />
      </div>
    </div>
  );
}

export default Projects;
