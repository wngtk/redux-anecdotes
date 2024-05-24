import {useDispatch, useSelector} from "react-redux";
import {voting, initializeAnecdotes} from "../reducers/anecdoteReducer";
import { addNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";

function Anecdotes() {
  const anecdotes = useSelector(state =>
    state.anecdotes
    .filter(x => x.content.includes(state.filter))
    .sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voting(id))
  }

  const notificate = (content) => {
    dispatch(addNotification(`you voted '${content}'`))
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
            <button onClick={() => { vote(anecdote.id); notificate(anecdote.content); }}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Anecdotes
