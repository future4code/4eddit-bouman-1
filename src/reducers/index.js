import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./reducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    // Outros reducers aqui
  });
