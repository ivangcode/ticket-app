// Import the main library
import React from 'react';

// Import the React Router tools.
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

// Importing Layout
import Layout from './Layout';

// And the our project pages.
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';


function App (){
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;