
import Dropdown from '../Dropdown';
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header" className="w-full bg-[#111111] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Section 6 Detailing logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-6 text-sm">
            <Dropdown
              title="Services"
              variant="overlay"
              items={[
                { label: 'Detail Packages', to: "/detail-packages" },
                { label: 'Paint Correction', to: "/paint-correction" },
                { label: 'Ceramic Coating', to: "/ceramic-coating" },
              ]}
            />
            <Link to="/about" className="text-white hover:underline hover:text-blue-500 transition">
              About
            </Link>
          </nav>

          {/* Button */}
          <div className="flex justify-center md:justify-end">
            <Button href='https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF'>Book Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
}



