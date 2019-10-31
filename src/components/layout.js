import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'


import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'A portfolio website for the full stack web developer McKay Nelson' },
              { name: 'keywords', content: 'Shanghai China expat ex-pat web developer full stack react node front end back end star wars react node bcrypt express massive postgres postgressql javascript html5 css3 html css js reactjs nodejs' },
            ]}
            link={[
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
