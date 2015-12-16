import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewTodo from './newTodo'
import { addTodo } from '../actions'

const App = ({todos, dispatch}) => {
	return (
		<div>
			<h1>Todos</h1>
			
			<NewTodo onChange={e => {
				if(e.keyCode == 13){
					dispatch(addTodo(e.target.value))
					e.target.value = ''
				}
			}}/>
			
			{ todos.map( todo => {
				return (
					<p key={todo.id}>
						{todo.todo}
					</p>
					)} 
				)}
		</div>
	)
}

function mapStateToProps(todos) {
	return{
		todos
	}
}

export default connect(mapStateToProps)(App)