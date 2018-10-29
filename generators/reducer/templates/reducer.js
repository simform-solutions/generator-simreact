import { createReducer, createActions } from 'reduxsauce'

const <%= name %>Request = () => ({
  ...state,
  loading: true
})

const <%= name %>Success = (state, data) => ({
  ...state,
  loading: false,
  data
})

const <%= name %>Failure = (state, error) => ({
  ...state,
  loading:false,
  error
})

export const { Types: <%= typename %>, Creators } = createActions({
  <%= name %>Request: [],
  <%= name %>Success: ['data'],
  <%= name %>Failure: ['error']
})

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default createReducer(initialState, {
  [<%= typename %>.<%= constName %>_REQUEST]: <%= name %>Request,
  [<%= typename %>.<%= constName %>_SUCCESS]: <%= name %>Success,
  [<%= typename %>.<%= constName %>_FAILURE]: <%= name %>Failure
})
