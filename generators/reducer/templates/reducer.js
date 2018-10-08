import { createReducer, createActions } from 'reduxsauce'

const <%= name %>Request = () => ({
  ...state,
  loading: true
})

const <%= name %>Success = (state, data) => ({
  ...state,
  data
})

const <%= name %>Failure = (state, error) => ({
  ...state,
  data
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
  [Types.<%= constName %>_REQUEST]: <%= name %>Request,
  [Types.<%= constName %>_SUCCESS]: <%= name %>Success,
  [Types.<%= constName %>_FAILURE]: <%= name %>Failure
})
