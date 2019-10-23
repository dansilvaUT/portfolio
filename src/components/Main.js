import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import gatsby from '../images/gatsby-icon.png'

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
          <h4>Languages</h4>
          <div className="skills">
            <div className="skill-container">
              <img src="" alt="" />
              <p>JavaScript</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>HTML5</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>CSS3</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>C++</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Java</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>PostgresSQL</p>
            </div>
          </div>
          <h4>Frameworks & Libraries</h4>
          <div className="skills">
            <div className="skill-container">
              <img src="" alt="" />
              <p>React</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Node.js</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Express.js</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Massive.js</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Redux.js</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>React Redux</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Selenium</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>pytest</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Jest</p>
            </div>
          </div>
          <h4>Extra Technologies</h4>
          <div className="skills">
            <div className="skill-container">
              <img src={gatsby} alt="gatsby icon" />
              <p>Gtasby.js</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Axios</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Brcypt</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>JIRA</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Git</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Bitbucket</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>Bugzilla</p>
            </div>
            <div className="skill-container">
              <img src="" alt="" />
              <p>ELK Stack</p>
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
