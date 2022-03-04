import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { FaConnectdevelop } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <header className={`header ${dark ? 'dark' : 'light'}`}>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <h1>Efiyahu</h1>
        <FaConnectdevelop size="30px" />
      </div>
      <div className="links">
        <Link className={`link ${dark ? 'dark' : 'light'}`} to="/">
          Home
        </Link>
        <Link className={`link ${dark ? 'dark' : 'light'}`} to="/projects">
          Projects
        </Link>
        <Link className={`link ${dark ? 'dark' : 'light'}`} to="/contact">
          Contact
        </Link>
        <Link className={`link ${dark ? 'dark' : 'light'}`} to="/about">
          About
        </Link>
      </div>
      <div className="container">
        <h5>Toggle Mode</h5>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDark((prevState) => !prevState)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
