import { createReducer, createActions } from 'reduxsauce'

const createTodo = (state, { todo }) => {
  const todos = { ...state }
  todos[todo.id] = {
    ...todo,
    completed: false
  }
  return todos
}

const toggleTodo = (state, { id }) => {
  const todos = { ...state }
  todos[id].completed = !todos[id].completed
  return todos
}

export const { Types, Creators } = createActions({
  createTodo: ['todo'],
  toggleTodo: ['id']
})

const initialState = Object.freeze({
  1: {
    id: 1,
    text: 'Todo 1',
    completed: false
  }
})

export default createReducer(initialState, {
  [Types.CREATE_TODO]: createTodo,
  [Types.TOGGLE_TODO]: toggleTodo
})
