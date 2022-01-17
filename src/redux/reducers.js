import { combineReducers } from 'redux';

import { userReducer as user } from './store-branches/user/reducers';
import { postReducer as post } from './store-branches/posts/reducers';
import { todoReducer as todo } from './store-branches/todos/reducers';
import { commentReducer as comment } from './store-branches/comments/reducers';


const topReducer = combineReducers({
  user,
  post,
  todo,
  comment,
});

export default topReducer;
