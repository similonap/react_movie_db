import { genres } from "@/data";
import { Button } from "./ui/button";

const WelcomeBlock = () => {
    return (
        <div className="mb-6">
            <div className="text-center bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg mb-6">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-6">
                    Welcome to The React Movie Page
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Discover the latest movies, explore popular genres, and dive into
                    detailed information about your favorite films.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {genres.map((genre) => (
                    <div key={genre.name} className="relative group">
                        <img
                            src={genre.image}
                            alt={genre.name}
                            onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg'
                            }}
                            className="w-full h-72 object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                            <h2 className="text-white text-lg font-semibold text-center px-4 mb-2">{genre.name}</h2>
                            <Button
                                asChild
                                variant="secondary"
                                size="sm"
                                className="mt-2"
                            >
                                <a href={`${genre.link}`}>
                                    Explore
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WelcomeBlock;
