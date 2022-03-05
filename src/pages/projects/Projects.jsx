import React, { useContext } from 'react';
import './Projects.styles.scss';
import { ThemeContext } from '../../context/ThemeContext';
import Card from '../../components/card/Card';
import quizicalPic from '../../assets/quizicalpic.jpg';
import eathWithUsPic from '../../assets/eatiwithus.jpg';
import shoppingImage from '../../assets/shoppingapp.jpg';

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
          title="Shopping Cart"
          image={shoppingImage}
          description="Simple React Shopping Cart using Context/Reducers and dummy data"
          netlify_url="https://efi-shopping-app.netlify.app"
          github_repo="https://github.com/Efiyahu/shopping-app.git"
        />
      </div>
    </div>
  );
}

export default Projects;
