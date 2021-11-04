import React from 'react';
// import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  
  render() {
    const link = {
      width: '100px',
    //   padding: '12px',
    //   margin: '0 6px 6px',
      textDecoration: 'none',
      color: 'teal',
    }
    const { currentUser } = this.props
    return (
      <div class="navbar">
        <a href="">Mike Shahindoust</a>
        <a href="https://github.com/MikeShahin">Github</a>
        <a href="mailto: MikeShahindoust@gmail.com">Contact</a>
      </div>
    )
  }
}

export default Header