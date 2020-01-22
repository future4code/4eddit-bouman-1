import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage"
import FeedPage from "../FeedPage";
import PostPage from '../PostPage'
import { PrivateRoute } from "./PrivateRoute"

export const routes = {
  login: "/",
  signUp: "/signup",
  feed: "/feed",
  post: '/post',
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
        <PrivateRoute exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.post} component={PostPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
