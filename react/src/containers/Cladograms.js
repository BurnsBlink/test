import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class Cladograms extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <Link to={`/cladograms/1/bacteria`}>
        <button className="branch">Bacteria</button>
      </Link><br/>
      <Link to={`/cladograms/1/archaea`}>
        <button className="branch">Archaea</button>
      </Link><br/>
      <Link to={`/cladograms/1/excavata`}>
        <button className="branch">Excavata</button>
      </Link><br/>
      <Link to={`/cladograms/1/unikonta`}>
        <button className="branch">Unikonta</button>
      </Link><br/>
      <Link to={`/cladograms/1/archaeplastida`}>
        <button className="branch">Archaeplastida</button>
      </Link><br/>
      <Link to={`/cladograms/1/sar`}>
        <button className="branch">SAR</button>
      </Link>
      <img className="cladogram-main" src="https://preview.ibb.co/dXLfNF/Screen_Shot_2017_08_15_at_12_14_56_PM.png" alt="Screen Shot 2017 08 15 at 12 14 56 PM" />
      </div>
    )
  }
}

export default Cladograms;
