import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./lorenzo"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    // Outros reducers aqui
  });
