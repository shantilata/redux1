import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import counterReducer from '../Reducer/counterReducer'
import IndexReducer from '../Reducer/AuthReducer/IndexReducer'

const storage = createStore(IndexReducer, applyMiddleware(thunk))

export default storage