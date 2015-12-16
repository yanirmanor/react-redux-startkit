import Immutable from 'immutable';

let id = 0;

export default ( state = Immutable.List([]), action ) => {
	switch (action.type) {
		case 'addTodo':
			return state.push({ id: id++, todo: action.todo})
		default:
			return state;
	}
}