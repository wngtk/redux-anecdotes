import ReactDOM from 'react-dom/client'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from "./reducers/filterReducer.js";

const store = createStore(combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
}))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
