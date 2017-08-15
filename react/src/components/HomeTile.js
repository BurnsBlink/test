import React from 'react';
import { Link, browserHistory } from 'react-router';

const HomeTile = props => {
  return (
    <div>
      <button className="intro-questions">Intro Questions</button>
      <Link to={`/cladograms`}>
        <button className="life-tree">Tree of Life</button>
      </Link>
    </div>
  );
}

export default HomeTile;
