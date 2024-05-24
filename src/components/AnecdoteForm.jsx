import {useDispatch} from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer.js";
import { addNotification } from "../reducers/notificationReducer.js";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  function addAnecdote(event) {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(addNotification(`you created '${content}'`))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm