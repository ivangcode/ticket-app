// Import the main library
import React from "react";

// Import the React Router tools.
import { BrowserRouter, Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

// Importing Layout
import Layout from "./Layout";

// And the our project pages.
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404"></Redirect>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
