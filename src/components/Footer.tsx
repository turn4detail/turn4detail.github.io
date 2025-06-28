export default function Footer() {
  return (
    <footer className="bg-[#111111] py-8 text-center text-sm">
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

        {/* Logo, description */}
        <div>
          <img src="/src/assets/logo.png" alt="Your Business Logo" className="h-28 w-auto mb-4"/>

          <p>
            Established in 2025, Auto After Care is dedicated to providing
            professional and friendly auto detailing services. We provide expert
            care with premium detailing packages designed to protect your vehicle,
            tailored to your needs. As a small, single-owner business, we’re here to
            serve you with dedication and passion. Contact Auto After Care today to
            schedule your appointment and give your car the spa day it deserves.
          </p>
        </div>

        {/* Services offered, hours of operation */}
        <div>
          <div className="mb-6">
              <p className="mb-2 font-bold text-lg">SERVICES OFFERED</p>

              {/* Detail packages */}
              <div className="mb-2 group">
                <div className="flex items-center gap-1 cursor-pointer group-hover:text-blue-500 transition-colors">
                  <p className="mb-0 font-bold text-sm">Detail Packages</p>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <ul className="text-sm text-gray-400 space-y-2 mt-2">
                    <li><a href="#exterior" className="hover:text-white">Exterior Detail</a></li>
                    <li><a href="#interior" className="hover:text-white">Interior Detail</a></li>
                    <li><a href="#full-detail" className="hover:text-white">Step 1 Detail</a></li>
                    <li><a href="#maintenance" className="hover:text-white">Maintenance Detail</a></li>
                  </ul>
                </div>
              </div>

              {/* Paint Correction */}
              <div className="mb-2 group">
                <div className="flex items-center gap-1 cursor-pointer group-hover:text-blue-500 transition-colors">
                  <p className="mb-0 font-bold text-sm">Paint Correction</p>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <ul className="text-sm text-gray-400 space-y-2 mt-2">
                    <li><a href="#gloss-enhancement-polish" className="hover:text-white">Step 2 Detail</a></li>
                    <li><a href="#2-step-correction" className="hover:text-white">Step 3 Detail</a></li>
                  </ul>
                </div>
              </div>

              {/* Ceramic coating */}
              <div className="mb-2 group">
                <div className="flex items-center gap-1 cursor-pointer group-hover:text-blue-500 transition-colors">
                  <p className="mb-0 font-bold text-sm">Ceramic Coating</p>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <ul className="text-sm text-gray-400 space-y-2 mt-2">
                    <li><a href="#ceramic-coating" className="hover:text-white">Step 4 Detail</a></li>
                  </ul>
                </div>
              </div>
            
          </div>

          <div className="mb-6">
            <p className="mb-2 font-bold text-lg">HOURS OF OPERATION</p>
            <p>Monday - Friday: By appointment</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>

        
        {/* Contact info, follow us, service areas */}
        <div>
          <div className="mb-6">
            <p className="mb-2 font-bold text-lg">CONTACT INFO</p>
            <p>
              Phone:{' '}
              <a href="tel:+14253062183" className="text-gray-400">
                +1 (425) 306-2183
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:autoaftercare@gmail.com" className="text-gray-400">
                autoaftercare@gmail.com
              </a>
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-bold text-lg">FOLLOW US</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">Facebook</a>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-bold text-lg">SERVICE AREAS</p>
            <p>Greater Seattle</p>
            <p>Kent</p>
            <p>Bellevue</p>
            <p>South King County</p>
          </div>
        </div>
      </section>
    
      <div className="text-center mt-4 text-zinc-400 text-xs">
        <p>Site built with ❤️ using React & Tailwind CSS</p>
        <p>© {new Date().getFullYear()} Auto After Care. All rights reserved.</p>
      </div>

    </footer>
  );
}
