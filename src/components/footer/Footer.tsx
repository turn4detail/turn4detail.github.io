import FooterBlock from "./FooterBlock";
import Column from "../Column";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111]">
      <div className="w-full flex justify-center px-4 py-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-left">

          {/* Column 1 */}
          <Column>
            <Link to="/">
              <img
                src="/logo.png"
                alt="Auto After Care logo"
                className="h-20 w-auto mx-auto mb-4"
              />
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

          {/* Column 2 */}
          <Column>
            <FooterBlock title="SERVICES OFFERED">
              <Dropdown
                title="Detailing Services"
                items={[
                  { label: 'Packages', to: '/detail-packages' },
                  { label: 'Paint Correction', to: '/paint-correction' },
                  { label: 'Ceramic Coating', to: '/ceramic-coating' },
                ]}
              />

              <Dropdown
                title="Photography Services"
                items={[
                  { label: 'Photography', to: '/404-not-found' },
                  { label: 'Rollers & Videos', to: '/404-not-found' },
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
                <a
                  href="https://www.instagram.com/autoaftercare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>

                <a
                  href="https://www.youtube.com/@autoaftercare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@autoaftercare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <FaTiktok className="w-8 h-8" />
                </a>
              </div>
            </FooterBlock>
          </Column>

          {/* Column 3 */}
          <Column>
            <FooterBlock title="CONTACT INFO">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="w-6 h-6 text-blue-500" />
                <a href="tel:+14253062183" className="text-blue-500">
                  +1 (425) 306-2183
                </a>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope className="w-6 h-6 text-blue-500" />
                <a href="mailto:autoaftercare@gmail.com" className="text-blue-500">
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

