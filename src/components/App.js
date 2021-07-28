// Import the main library
import React from 'react';

// Import the React Router tools.
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

// And the our project pages.
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';


function App (){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;