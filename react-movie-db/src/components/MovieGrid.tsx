import { Movie } from "@/types";
import { Button } from "./ui/button";

interface MovieGridProps {
    movies: Movie[]
}

const MovieGrid = ({ movies }: MovieGridProps) => {
    return (
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
                            <a href={`https://www.imdb.com/title/${movie.imdbId}`}>
                                View on IMDB
                            </a>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieGrid;