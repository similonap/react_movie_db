'use client'

import { useState, useEffect } from 'react'
import { Search, Home, Contact, Film, Laugh, Drama, Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface Movie {
  id: number
  title: string
  posterURL: string
  imdbId: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetch(`https://sampleapis.assimilate.be/movies/drama`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error))
  }, [])

  const NavItems = () => (
    <>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/">
          <Home className="h-5 w-5 mr-2" />
          Home
        </a>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/movies/animation">
          <Film className="h-5 w-5 mr-2" />
          Animation
        </a>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/movies/comedy">
          <Laugh className="h-5 w-5 mr-2" />
          Comedy
        </a>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/movies/drama">
          <Drama className="h-5 w-5 mr-2" />
          Drama
        </a>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/movies/scifiFantasy">
          <Drama className="h-5 w-5 mr-2" />
          Scifi & Fantasy
        </a>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <a href="/contact">
          <Contact className="h-5 w-5 mr-2" />
          Contact
        </a>
      </Button>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <NavItems />
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                <NavItems />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center">
              <div className="relative w-full max-w-xs">
                <Input
                  type="text"
                  placeholder="Search movies..."
                  className="w-full sm:w-64"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="relative group">
              <img
                src={movie.posterURL}
                alt={movie.title}
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg'
                }}
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                <h2 className="text-white text-lg font-semibold text-center px-4 mb-2">{movie.title}</h2>
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="mt-2"
                >
                  <a href={`https://www.imdb.com/title/${movie.imdbId}`} target="_blank" rel="noopener noreferrer">
                    View on IMDB
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white shadow-md mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-900">Movie Web App</h2>
              <p className="text-sm text-gray-600">Discover your next favorite movie</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Movie Web App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}