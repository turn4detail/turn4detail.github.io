import FooterBlock from "./FooterBlock";
import Column from "../Column";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111]">
      {/* Row 1 */}
      <div className="w-full flex justify-center px-4 py-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-left">

          {/* Column 1 */}
          <Column>
            <Link to="/">
              <img
                src="/logo.png"
                alt="Section 6 Detailing logo"
                className="h-30 w-auto mx-auto"
              />
            </Link>

            <p>
              Established in 2025, Section 6 Detailing is dedicated to providing
              professional and friendly auto detailing services. We provide expert
              care with premium detailing packages designed to protect your vehicle,
              tailored to your needs. As a small, single-owner business, we’re here to
              serve you with dedication and passion. Contact Section 6 Detailing today to
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
                  href="https://www.instagram.com/section6detailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline hover:text-white transition"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>

                <a
                  href="https://www.youtube.com/@archiv.autowerks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline hover:text-white transition"
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@archiv.auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline hover:text-white transition"
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
                <a href="tel:+14253062183" className="text-blue-500 hover:underline hover:text-white transition">
                  +1 (425) 306-2183
                </a>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope className="w-6 h-6 text-blue-500" />
                <a href="mailto:steven.tran@section6detailing.com" className="text-blue-500 hover:underline hover:text-white transition">
                  steven.tran@section6detailing.com
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

      {/* Row 2 */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4 mt-4 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} Section 6 LLC. All rights reserved.</p>
        
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/terms-and-conditions" className="hover:underline hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:underline hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

