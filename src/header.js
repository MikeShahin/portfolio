import React from 'react';
// import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  
  render() {
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      textDecoration: 'none',
      color: 'teal',
    }
    const { currentUser } = this.props
    return (
      <div className="header">

        <ul>
            <li style={link}>
                Mike Shahindoust
            </li>
            <li>|</li>
            <li style={link}>
                Github
            </li>
          </ul>
      </div>
    )
  }
}

export default Header