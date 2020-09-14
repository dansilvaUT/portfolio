import PropTypes from 'prop-types'
import React from 'react'
import me from '../images/new-me.jpg'
import pic03 from '../images/pic03.jpg'
import resume from '../static/McKay-Nelson-resume.pdf'

// images for skills
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
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={me} alt="" />
          </span>
          <p>
            I first discovered programming in college, after some urging from close family members. Soon I discovered an intense love for it and was driven to learn and understand it, inside and out. For the first time in my life, I found myself wanting to do my homework. After working in the industry for a few years and going to college, I decided I needed to streamline my education and I enrolled in DevMountain, a web development bootcamp.
          </p>
          <p>
            Outside of web development, I enjoy spending my time with family and friends. It does not matter much to me how the time is spent; whether it is hiking, playing video or board games, playing or watching sports, watching movies, having deep conversations or anything that helps me feel connected to them.
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
              <p>Gatsby.js</p>
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
            <div className="skill-container">
              <img src={trello} alt="trello" />
              <p>Trello</p>
            </div>
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
        
          <h3>Inventario</h3>
          <p>
            Inventario is a group-developed website that provides and warehouse management a modern inventory tracker. With a minimal interface, it makes warehouse employees' jobs easier, and the robust back-end is able to handle multiple warehouses with independent warehouse inventory.
            My role within the group was mainly back-end and database work but I did assist with the front-end on a few pages.
          </p>
          <h4>Technologies Used</h4>
          <p>
            React | Node.js | Express | Bcrypt | Material UI | HTML5 | CSS3 | Axios | PostgresSQL | Nodemailer
          </p>
          <p>Live site: <a href="http://167.71.147.170:8080/" target="_blank">167.71.147.170</a></p>
          <p>Github repo: <a href="https://github.com/The-Ringers/Warehouse" target="_blank">github.com/The-Ringers/Warehouse</a></p>

          <hr/>

          <h3>Game Tracker</h3>
          <p>
            Game Tracker is a personally-developed website which uses the IGDB API to track which games you own and have played, as well as those you want to own and play. The idea for this website is for me to expand upon its current functionality and make it a social media based around video games - essentially a Goodreads for video games.
          </p>
          <h4>Technologies Used</h4>
          <p>
            React | Node.js | Express | Bcrypt | IGDB API | HTML5 | CSS3 | Axios | PostgresSQL
          </p>
          <p>Live site: <a href="http://167.71.254.138:8080/" target="_blank">167.71.254.138</a></p>
          <p>Github repo: <a href="https://github.com/tmckaynelson/rgb-clan" target="_blank">github.com/tmckaynelson/rgb-clan</a></p>
          {close}

          <hr/>

          <h3>Kevin Bessey</h3>
          <p>
            A small website created for a musician. Basic front end to show tour dates to fans and provide links to his social media sites.
            I added a back-end for him to use so that he can update his own tour dates without having to change the code.
          </p>
          <h4>Technologies Used</h4>
          <p>
            React | Node.js | Express | Bcrypt | HTML5 | CSS3 | Axios | PostgresSQL
          </p>
          <p>Live site: <a href="http://kevinbessey.com" target="_blank">kevinbessey.com</a></p>
          <p>Github repo: <a href="https://github.com/tmckaynelson/kevin-bessey-music" target="_blank">github.com/tmckaynelson/kevin-bessey-music</a></p>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : '' }`}
          style={{ display: 'none' }}
        >
          <div className="contact">
            <a href="mailto:tmckaynelson@gmail.com" target="_blank"><button className="contact-button"><span className="icon fa-envelope"></span> Email</button></a>
            <a href="https://www.linkedin.com/in/mckay-nelson/" target="_blank"><button className="contact-button"><span className="icon fa-linkedin"></span> LinkedIn</button></a>
            <a href="https://github.com/tmckaynelson" target="_blank"><button className="contact-button"><span className="icon fa-github"></span> Github</button></a>
            <a href={resume} download><button className="contact-button" target="_blank"><span className="icon fa-save"></span> Resume</button></a>
          </div>
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
