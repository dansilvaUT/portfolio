import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <a href="https://www.reddit.com/r/EmpireDidNothingWrong/" target="_blank"><span className="icon fa-empire"></span></a>
        </div>
        <div className="content">
            <div className="inner">
                <h1>McKay Nelson</h1>
                <p>Full Stack Web Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
