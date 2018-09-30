import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Counter from 'pages/Counter/Counter';
import Schulte from 'pages/Schulte/Schulte';
import Draft from 'pages/Draft';


const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link href to="/">首页</Link></li>
        <li><Link href to="/page1">Page1</Link></li>
        <li><Link href to="/Counter">Counter</Link></li>
        <li><Link href to="/Schulte">Schulte</Link></li>
        <li><Link href to="/Draft">Draft</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/Counter" component={Counter} />
        <Route path="/Schulte" component={Schulte} />
        <Route path="/Draft" component={Draft} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
