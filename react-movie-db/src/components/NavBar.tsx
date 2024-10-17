import { Menu, Search, Contact } from "lucide-react";
import Icon, { IconName } from "./Icon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { useState } from "react";
import { genres } from "@/data";

const NavItems = () => (
    <>
        <Button variant="ghost" className="justify-start" asChild>
            <a href="/">
                <Icon name="house" className="h-5 w-5 mr-2" />
                Home
            </a>
        </Button>
        {genres.map((genre) => (
            <Button key={genre.name} variant="ghost" className="justify-start" asChild>
                <a href="/movies/animation">
                    <Icon name={genre.icon as IconName} className="h-5 w-5 mr-2" />
                    {genre.name}
                </a>
            </Button>
        ))}
        <Button variant="ghost" className="justify-start" asChild>
            <a href="/contact">
                <Contact className="h-5 w-5 mr-2" />
                Contact
            </a>
        </Button>
    </>
);

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
    );
};

export default NavBar;
