import AnecdoteForm from "./components/AnecdoteForm"
import Anecdotes from "./Anecdotes"
import {useDispatch} from "react-redux";
import {filterChange} from "./reducers/filterReducer.js";

function Filter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value))
  }

  const style = {
    margin: 10
  }

  return (
    <div>
      filter <input onChange={handleChange} />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App
