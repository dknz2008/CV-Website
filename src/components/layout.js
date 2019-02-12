import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Menu from '../components/menu'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <hr />
          <footer>
            © {new Date().getFullYear()}, Dylan Kumar, <a href="mailto:dylan.kumar@icloud.com">Dylan.Kumar@icloud.com</a>, <a href="https://github.com/dknz2008">Github</a>, <a href="https://www.linkedin.com/in/dylan-kumar-326a4455/">LinkedIn</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
