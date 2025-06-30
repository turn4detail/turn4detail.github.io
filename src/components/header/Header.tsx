import Column from '../Column'; 
import Dropdown from '../Dropdown'; 
import Button from '../Button'; 
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-[#111111] text-white">
      <div className="w-full flex justify-center px-4 py-4">
        <div className="w-full max-w-7xl grid grid-cols-3 items-center">
      
          <Column>
            <Link to="/">
              <img src="/logo.png" alt="Auto After Care logo" className="h-20 w-auto mx-auto mb-4" />
            </Link>
          </Column>

          <Column>
            <nav className="flex justify-center gap-4 text-sm">
              <Dropdown
                title="Services"
                variant='overlay'
                items={[
                  { label: 'Detail Packages', to: "/detail-packages" },
                  { label: 'Paint Correction', to: "/paint-correction" },
                  { label: 'Ceramic Coating', to: "/ceramic-coating" },
                ]}
              />
              <Link to="/about" className="hover:text-blue-500 transition">About</Link>
            </nav>
          </Column>

          <Column>
            <div className="flex justify-center">
              <Button>Book Now</Button>
            </div>
          </Column>
        </div>
      </div>
    </header>
  );
}
