import FooterBlock from "./FooterBlock";
import Column from "../Column";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full w-screen bg-[#111111]">
      <div className="w-full flex justify-center px-4 py-8">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Column 1 */}
          <Column>
            <Link to="/">
              <img src="/logo.png" alt="Auto After Care logo" className="h-20 w-auto mx-auto mb-4" />
            </Link>

            <p>
              Established in 2025, Auto After Care is dedicated to providing
              professional and friendly auto detailing services. We provide expert
              care with premium detailing packages designed to protect your vehicle,
              tailored to your needs. As a small, single-owner business, we’re here to
              serve you with dedication and passion. Contact Auto After Care today to
              schedule your appointment and give your car the spa day it deserves.
            </p>
          </Column>

          {/* Column 2 todo fix links*/}
          <Column>
            <FooterBlock title="SERVICES OFFERED">
              <Dropdown
                title="Detail Packages"
                items={[
                  { label: 'Exterior Detail', to: '#exterior-detail' },
                  { label: 'Interior Detail', to: '#interior-detail' },
                  { label: 'Step 1 Detail', to: '#full-detail' },
                  { label: 'Maintenance Detail', to: '#maintenance-detail' },
                ]}
              />

              {/* Paint Correction */}
              <Dropdown
                title="Paint Correction"
                items={[
                  { label: 'Step 2 Detail', to: '#gloss-enhancement-polish' },
                  { label: 'Step 3 Detail', to: '#2-step-correction' },
                ]}
              />

              {/* Ceramic coating */}
              <Dropdown
                title="Ceramic Coating"
                items={[
                  { label: 'Step 4 Detail', to: '#ceramic-coating' },
                ]}
              />
            </FooterBlock>

            <FooterBlock title="HOURS OF OPERATION">
              <div className="space-y-1">
                <div className="flex justify-between w-full">
                  <span>Mon - Fri</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Sat - Sun</span>
                  <span>Closed</span>
                </div>
              </div>
            </FooterBlock>

            <FooterBlock title="FOLLOW US">
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">Facebook</a>
              </div>
            </FooterBlock>
          </Column>


          {/* Column 3 */}
          <Column>
            <FooterBlock title="CONTACT INFO">
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
            </FooterBlock>

            <FooterBlock title="SERVICE AREAS">
              <p>Seattle, WA</p>
              <p>Bellevue, WA</p>
              <p>Sammamish, WA</p>
              <p>Issaquah, WA</p>
              <p>Renton, WA</p>
              <p>Kent, WA</p>
              <p>Auburn, WA</p>
            </FooterBlock>
          </Column>
        </div>
      </div>

      <div className="py-4 text-center mt-4 text-zinc-400 text-xs">
        <p>© {new Date().getFullYear()} Auto After Care. All rights reserved.</p>
      </div>
    </footer>
  );
}
