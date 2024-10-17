const ContactForm = () => {
    return (
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Us</h2>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                    <input type="text" id="name" name="name" required
                        className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                    <input type="email" id="email" name="email" required
                        className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" name="message" rows={5} required
                        className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;