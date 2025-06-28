import Column from '../Column'; // your renamed FooterColumn
import Dropdown from '../Dropdown'; // your renamed FooterDropdown
import BookNowButton from '../BookNowButton'; // your reusable button

export default function Header() {
  return (
    <header className="w-full bg-[#111111] text-white">
      <div className="w-full flex justify-center px-4 py-4">
        <div className="w-full max-w-7xl grid grid-cols-3 items-center">
          {/* === Column 1: Logo === */}
          <Column>
            <img src="/src/assets/logo.png" alt="Your Business Logo" className="h-20 w-auto mx-auto mb-4" />
          </Column>

          {/* === Column 2: Navbar with Dropdown === */}
          <Column>
            <nav className="flex justify-center gap-4 text-sm">
              <a href="#services" className="hover:text-blue-500 transition">Services</a>
              <Dropdown
                title="Protect"
                items={[
                  { label: 'Ceramic Coating', href: '#ceramic' },
                  { label: 'PPF', href: '#ppf' },
                ]}
              />
              <a href="#about" className="hover:text-blue-500 transition">About</a>
              <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </nav>
          </Column>

          {/* === Column 3: Book Now === */}
          <Column>
          <div className="flex justify-end">
            <BookNowButton />
            </div>
          </Column>
        </div>
      </div>
    </header>
  );
}
