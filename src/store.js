import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers/index";

const middlewares = applyMiddleware();

const store = createStore(reducers, {}, middlewares);

export default store;