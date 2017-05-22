import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.getCurrentTheme = this.getCurrentTheme.bind(this)
  }

  getCurrentTheme() {
    fetch(`gateway.marvel.com/v1/public/characters`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(theme => {
      debugger
      this.setState({
      })
    })
  }

  render() {
    return(
      <div className="row">
        <div className="small-12 columns">
          <h1 className="title">HomePage</h1>
        </div>
      </div>
    )
  }
}

export default Home;
