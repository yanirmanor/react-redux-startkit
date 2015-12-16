import { createStore, applyMiddleware, compose } from 'redux';
import todos from './reducers/todos';

export default createStore(todos);