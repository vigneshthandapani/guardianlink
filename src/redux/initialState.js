import { userInitialState } from './store-branches/user/initialState';
import { postListInitialState } from './store-branches/posts/initialState';
import { commentListInitialState } from './store-branches/comments/initialState';
import { todoListInitialState } from './store-branches/todos/initialState';

const initialState = {
  user: userInitialState,
  post: postListInitialState,
  comment: commentListInitialState,
  todo: todoListInitialState,
};

export default initialState;
