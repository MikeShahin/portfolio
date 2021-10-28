import React, { Component } from 'react';
import './App.css';
import ProjectsCard from './projectsCard' 
import Bio from './bio';


class App extends Component {

  render() {
    return (
      <div>
          <Bio />
          < ProjectsCard />
      </div>
    );
  }
}

export default App;
