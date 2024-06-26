import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotes"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// export const voting = (id) => {
//   return {
//     type: 'anecdotes/voting',
//     payload: {
//       id: id
//     }
//   }
// }

// export const createAnecdote = (anecdote) => {
//   return {
//     type: 'anecdotes/createAnecdote',
//     payload: {
//       anecdote
//     }
//   }
// }

const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)

//   switch (action.type) {
//     case 'VOTE':
//       return state.map(x => {
//         if (x.id !== action.payload.id) {
//           return x
//         }
//         return { ...x, votes: x.votes + 1 }
//       })

//     case 'NEW_ANECDOTE':
//       return [...state, asObject(action.payload.anecdote)]

//     default:
//       return state
//   }
// }

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voting(state, action) {
      const id = action.payload
      const anecdote = state.find(x => x.id === id)
      anecdote.votes += 1
    },
    // createAnecdote(state, action) {
    //   const content = action.payload
    //   state.push(asObject(content))
    // },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { voting, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.update(anecdote.id, {...anecdote, votes: anecdote.votes + 1})
    dispatch(voting(newAnecdote.id))
  }
}

export default anecdoteSlice.reducer
