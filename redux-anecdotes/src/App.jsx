import AnecdoteForm from './components/AnecdoteForm'
import { addVote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
/* 
  const addAnectode = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }
 */
  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const amountOfVotesSorter = (a, b) => b.votes - a.votes

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(amountOfVotesSorter).map(anecdote =>
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
      <AnecdoteForm />
      {/* <form onSubmit={addAnectode}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form> */}
    </div>
  )
}

export default App