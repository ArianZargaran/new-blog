import { combineReducers } from "redux";
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default reducers;