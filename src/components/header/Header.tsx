import Column from '../Column'; // your renamed FooterColumn
import Dropdown from '../Dropdown'; // your renamed FooterDropdown
import Button from '../Button'; // your reusable button

export default function Header() {
  return (
    <header className="w-full bg-[#111111] text-white">
      <div className="w-full flex justify-center px-4 py-4">
        <div className="w-full max-w-7xl grid grid-cols-3 items-center">
          {/* === Column 1: Logo === */}
          <Column>
            <img src="/src/assets/logo.png" alt="Auto After Care logo" className="h-20 w-auto mx-auto mb-4" />
          </Column>

          {/* === Column 2: Navbar with Dropdown === */}
          <Column>
            <nav className="flex justify-center gap-4 text-sm">
              <Dropdown
                title="Services"
                items={[
                  { label: 'Detail Packages', href: '#detail-packages' },
                  { label: 'Paint Correction', href: '#paint-correction' },
                  { label: 'Ceramic Coating', href: '#ceramic-coating' },
                ]}
              />
              <a href="#about" className="hover:text-blue-500 transition">About</a>
              <a href="#testimonial" className="hover:text-blue-500 transition">Testimonial</a>
            </nav>
          </Column>

          {/* === Column 3: Book Now === */}
          <Column>
            <div className="flex justify-end">
              <Button>Book Now</Button>
            </div>
          </Column>
        </div>
      </div>
    </header>
  );
}
