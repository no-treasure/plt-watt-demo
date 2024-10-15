import { useEffect, useState } from 'react'
import { GetMoviesResponses } from './api/api-types'
import { api } from './api'

export default function App() {
  const [movies, setMovies] = useState<GetMoviesResponses>([])

  useEffect(() => {
    api.getMovies().then((data) => setMovies(data))
  })

  return (
    <div>
      <main>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.id}</div>
        ))}
      </main>
    </div>
  )
}
