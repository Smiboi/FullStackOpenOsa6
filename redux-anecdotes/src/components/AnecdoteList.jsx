import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ filter, anecdotes }) => {
      if ( filter === '' ) {
        return anecdotes
      }
      return anecdotes.filter(
        anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
    })

    const dispatch = useDispatch()
  
    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
      }
    
    const amountOfVotesSorter = (a, b) => b.votes - a.votes

    return(
      <div>
        {[...anecdotes].sort(amountOfVotesSorter).map(anecdote =>
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
      </div>
    )
}

export default AnecdoteList