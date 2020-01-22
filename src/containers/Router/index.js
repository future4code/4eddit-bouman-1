import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage"
import FeedPage from "../FeedPage";
import PostPage from '../PostPage'



export const routes = {
  root: "/",
  signUp: "/signup",
  feed: "/feed"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
        <Route exact path={routes.feed} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
