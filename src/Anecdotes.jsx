import {useDispatch, useSelector} from "react-redux";
import {voting} from "./reducers/anecdoteReducer";

function Anecdotes() {
  const anecdotes = useSelector(state =>
    state.anecdotes
    .filter(x => x.content.includes(state.filter))
    .sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voting(id))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Anecdotes
