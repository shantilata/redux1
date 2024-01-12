import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import counterReducer from '../counterReducer'

const IndexReducer = combineReducers({
    auth: AuthReducer,
    counter: counterReducer
})

export default IndexReducer