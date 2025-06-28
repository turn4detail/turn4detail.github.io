export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/your-logo.png" // Replace with your logo path
            alt="Your Business Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <div className="relative group">
            <button className="focus:outline-none">Services</button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="/service1" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
              <a href="/service2" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
              <a href="/service3" className="block px-4 py-2 hover:bg-gray-200">Service 3</a>
            </div>
          </div>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/testimonials" className="hover:text-gray-300">Testimonials</a>
        </nav>

        {/* Book Now Button */}
        <div className="flex-shrink-0">
          <a
            href="/book"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
