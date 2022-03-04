import React, { useContext } from 'react';
import './Home.styles.scss';
import { ThemeContext } from '../../context/ThemeContext';
import myPic from '../../assets/myself.jpg';

function Home() {
  const { dark } = useContext(ThemeContext);

  return (
    <main className={`home ${dark ? 'dark' : 'light'}`}>
      <div className="left">
        <div className="image">
          <img className="my-image" src={myPic} alt="myself" />
        </div>
      </div>
      <div className="right">
        <h1 className={`title ${dark ? 'dark' : 'light'}`}>
          Hey, My name is{' '}
          <span className={`name ${dark ? 'dark' : 'light'}`}>
            Efraim Alkhazov
          </span>
        </h1>
        <div className="wrapper">
          <ul className="dynamic-text">
            <li>
              <span
                className={`dynamic-span ${dark ? 'dark-line' : 'light-line'}`}
              >
                Front End Developer
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
