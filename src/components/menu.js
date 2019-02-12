import React from 'react'
import Link from 'gatsby-link';

const Menu = () => (
    <div style={{
        background: '#303030', //f4f4f4
        paddingTop: '10px',
        // width: '1000px',
        margin: '0 auto'
    }}>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            <li><Link to="/" className="menu-link">About</Link></li>
            <li><Link to="/previousWork" className="menu-link">Work Experience</Link></li>
            <li><Link to="/projects" className="menu-link">Projects</Link></li>
            <li><Link to="/skills" className="menu-link">Skills</Link></li>
        </ul>

    </div>
)

export default Menu;