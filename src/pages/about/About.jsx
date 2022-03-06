import React, { useContext } from 'react';
import './About.styles.scss';
import { DiCss3 } from 'react-icons/di';
import { SiReact } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { ThemeContext } from '../../context/ThemeContext';
import ResumeHeb from '../../assets/resume-hebrew.pdf';
import ResumeEng from '../../assets/resume-english.pdf';
import { BsDownload } from 'react-icons/bs';

function About() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`about-container ${dark ? 'dark' : 'light'}`}>
      <div className="upper">
        <h1 className={`about-title ${dark ? 'dark' : 'light'}`}>About Me</h1>
        <p className="about-text">
          My name is Efraim Alkhazov. I'm 27 years old and I live in Israel. Yes
          the holy land. I have a beautiful family, My wife Bella and a baby
          girl name Nicole, They are my world. I'm a self taught Web developer
          trying my luck in the indutry, for a better future for my family.
          Currently am employed as a security guard to pay the bills, but
          wishing for that to change. I'm dedicated to improve my knowledge in
          the field. My biggest strengths are{' '}
          <span className={`about-text__color ${dark ? 'dark' : 'light'}`}>
            Javascript
          </span>{' '}
          and{' '}
          <span className={`about-text__color ${dark ? 'dark' : 'light'}`}>
            React
          </span>
          . Hope to be of service :)
        </p>
        <div className="files">
          <a
            href={ResumeHeb}
            download="Resume-Hebrew"
            rel="noreferrer"
            target="_blank"
          >
            <button className={`files-btn ${dark ? 'dark' : 'light'}`}>
              Resume (Hebrew){' '}
              <span style={{ marginLeft: '.3rem' }}>
                <BsDownload />
              </span>
            </button>
          </a>
          <a
            href={ResumeEng}
            download="Resume-English"
            rel="noreferrer"
            target="_blank"
          >
            <button className={`files-btn ${dark ? 'dark' : 'light'}`}>
              Resume (English){' '}
              <span style={{ marginLeft: '.3rem' }}>
                <BsDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="lower">
        <div className="specialties">
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <AiFillHtml5 />
              </span>{' '}
              HTML 5
            </p>
          </div>
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <DiCss3 />
              </span>{' '}
              CSS
            </p>
          </div>
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <SiReact />
              </span>{' '}
              React
            </p>
          </div>
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <DiJava />
              </span>{' '}
              Java
            </p>
          </div>
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <SiFirebase />
              </span>{' '}
              Firebase
            </p>
          </div>
          <div className="grid-item">
            <p className={dark ? 'dark' : 'light'}>
              <span style={{ marginRight: '.5rem' }}>
                <DiJavascript />
              </span>{' '}
              Javascript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
