import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostsIndex from "./components/posts_index";
import PostsNew from './components/posts_new';

import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
