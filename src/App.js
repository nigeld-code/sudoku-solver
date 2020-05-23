import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
