const Footer = () => {
    return (
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
    )
}

export default Footer;