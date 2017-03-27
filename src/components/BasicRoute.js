import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Counter from './Counter';

const BasicRoute = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
      </ul>

      <hr/>

      <Route path="/counter" component={Counter}/>
    </div>
  </Router>
)

export default BasicRoute;
