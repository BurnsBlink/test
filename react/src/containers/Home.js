import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import HomeTile from '../components/HomeTile';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="home">
      <h1>Intro to Biology</h1>
      <HomeTile
      />
      </div>
    )
  }
}

export default Home;
