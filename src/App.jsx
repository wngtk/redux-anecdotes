import AnecdoteForm from "./components/AnecdoteForm"
import Anecdotes from "./Anecdotes"
import Filter from "./components/Filter"

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
