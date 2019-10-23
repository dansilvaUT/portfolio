import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import axios from '../images/axios.png'
import bcrypt from '../images/bcrypt-logo.jpg'
import bitbucket from '../images/bitbucket-icon.svg'
import bugzilla from '../images/bugzilla-icon.svg'
import cpp from '../images/cpp_logo.png'
import css3 from '../images/css3-icon.svg'
import elastic from '../images/elastic-icon.svg'
import express from '../images/expressjs-icon.svg'
import gatsby from '../images/gatsbyjs-icon.svg'
import git from '../images/git-icon.svg'
import github from '../images/github-icon.svg'
import html5 from '../images/html5-icon.svg'
import javascript from '../images/javascript-icon.svg'
import jest from '../images/jest-icon.svg'
import jira from '../images/jira-icon.svg'
import linux from '../images/linux-icon.svg'
import massive from '../images/massive.ico'
import node from '../images/node-icon.svg'
import postgres from '../images/postgresql-icon.svg'
import pytest from '../images/pytest.png'
import python from '../images/python-icon.svg'
import react from '../images/react-icon.svg'
import redux from '../images/redux-icon.svg'
import selenium from '../images/selenium-icon.svg'
import trello from '../images/trello-icon.svg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <h4 className="minor">Languages</h4>
          <div className="skills">
            <div className="skill-container">
              <img src={javascript} alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-container">
              <img src={html5} alt="html5" />
              <p>HTML5</p>
            </div>
            <div className="skill-container">
              <img src={css3} alt="css3" />
              <p>CSS3</p>
            </div>
            <div className="skill-container">
              <img src={python} alt="python" />
              <p>Python</p>
            </div>
            <div className="skill-container">
              <img src={cpp} alt="c++" />
              <p>C++</p>
            </div>
            <div className="skill-container">
              <img src={postgres} alt="postgresql" />
              <p>PostgresSQL</p>
            </div>
          </div>
          <h4 className="minor">Frameworks & Libraries</h4>
          <div className="skills">
            <div className="skill-container">
              <img src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="skill-container">
              <img src={node} alt="node" />
              <p>Node.js</p>
            </div>
            <div className="skill-container">
              <img src={express} alt="express" />
              <p>Express.js</p>
            </div>
            <div className="skill-container">
              <img src={massive} alt="massive" />
              <p>Massive.js</p>
            </div>
            <div className="skill-container">
              <img src={redux} alt="redux" />
              <p>Redux.js</p>
            </div>
            <div className="skill-container">
              <img src={redux} alt="react redux" />
              <p>React Redux</p>
            </div>
            <div className="skill-container">
              <img src={selenium} alt="selenium" />
              <p>Selenium</p>
            </div>
            <div className="skill-container">
              <img src={pytest} alt="pytest" />
              <p>pytest</p>
            </div>
            <div className="skill-container">
              <img src={jest} alt="jest" />
              <p>Jest</p>
            </div>
          </div>
          <h4 className="minor">Extra Technologies</h4>
          <div className="skills">
           <div className="skill-container">
              <img src={linux} alt="linux" />
              <p>Linux</p>
            </div>
            <div className="skill-container">
              <img src={axios} alt="axios" />
              <p>Axios</p>
            </div>
            <div className="skill-container">
              <img src={gatsby} alt="gatsby" />
              <p>Gtasby.js</p>
            </div>
            <div className="skill-container">
              <img src={bcrypt} alt="bcrypt" />
              <p>Brcypt</p>
            </div>
            <div className="skill-container">
              <img src={jira} alt="jira" />
              <p>JIRA</p>
            </div>
            <div className="skill-container">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
             <div className="skill-container">
              <img src={github} alt="github" />
              <p>Github</p>
            </div>
            <div className="skill-container">
              <img src={bitbucket} alt="bitbucket" />
              <p>Bitbucket</p>
            </div>
            <div className="skill-container">
              <img src={bugzilla} alt="bugzilla" />
              <p>Bugzilla</p>
            </div>
            <div className="skill-container">
              <img src={elastic} alt="ELK stack" />
              <p>ELK Stack</p>
            </div>
          </div>
           <div className="skill-container">
            <img src={trello} alt="trello" />
            <p>Trello</p>
          </div>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <ul className="icons">
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
