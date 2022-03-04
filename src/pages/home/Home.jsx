import React, { useContext } from 'react';
import './Home.styles.scss';
import { ThemeContext } from '../../context/ThemeContext';

function Home() {
  const { dark } = useContext(ThemeContext);

  return (
    <main className={`home ${dark ? 'dark' : 'light'}`}>
      <div className="left"></div>
      <div className="right">
        <h1 className={`title ${dark ? 'dark' : 'light'}`}>
          Hey, My name is{' '}
          <span className={`name ${dark ? 'dark' : 'light'}`}>
            Efraim Alkhazov
          </span>
        </h1>
      </div>
    </main>
  );
}

export default Home;
