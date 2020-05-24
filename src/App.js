import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Solve from './pages/Solve/Solve';

const App = props => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/solve' component={props => <Solve {...props} />} />
          <Route path='/' exact component={props => <Home {...props} />} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
