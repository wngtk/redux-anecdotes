import {useDispatch, useSelector} from "react-redux";
import {initializeAnecdotes, voteAnecdote} from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";

function Anecdotes() {
  const anecdotes = useSelector(state =>
    [...state.anecdotes]
    .filter(x => x.content.includes(state.filter))
    .sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
  }

  const notificate = (content) => {
    dispatch(setNotification(`you voted '${content}'`))
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
            <button onClick={() => { vote(anecdote); notificate(anecdote.content); }}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Anecdotes
