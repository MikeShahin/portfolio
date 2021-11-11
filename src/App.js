import React, { Component } from 'react';
import './App.css';
import ProjectsCard from './projectsCard' 
import Bio from './bio';
import Header from './header';


class App extends Component {

  render() {
    return (
      <>
          <Header />
          <Bio />
      <div className="container">
          < ProjectsCard />
      </div>
      </>
    );
  }
}

export default App;
