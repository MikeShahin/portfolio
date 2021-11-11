import React, { Component } from 'react';
import './App.css';
import MainProjectsCard from './MainProjectsCard';
import SideProjectsCard from  './sideProjectsCard' 
import Bio from './bio';
import Header from './header';


class App extends Component {

  render() {
    return (
      <>
          <Header />
          <Bio />
      <div className="container">
          < MainProjectsCard />
          < SideProjectsCard />
      </div>
      </>
    );
  }
}

export default App;
