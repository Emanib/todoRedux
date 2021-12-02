import { createStore, applyMiddleware, combineReducers} from 'redux'
import  thunk  from 'redux-thunk'
import { listReducer } from './todoList/reducer';
const reducers = combineReducers({
  list:listReducer
})
export const store = createStore(
  reducers,
  applyMiddleware(thunk)
)
export const dispatch=store.dispatch
