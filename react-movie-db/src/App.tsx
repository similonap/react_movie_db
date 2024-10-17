'use client'

import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"
import Footer from "./components/Footer"
import { Movie } from "./types"

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  const loadMovies = async (genre: string) => {
    try {
      const response = await fetch(`https://sampleapis.assimilate.be/movies/${genre}`)
      const data = await response.json()
      setMovies(data)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    loadMovies('drama');
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MovieGrid movies={movies} />
      </main>

      <Footer />
    </div>
  )
}