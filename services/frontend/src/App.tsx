import { useEffect, useState } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/platformatic-db/movies', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setMovies(data))
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
