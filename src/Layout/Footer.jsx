import phoenix from "../assets/phoenix.svg";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-[2000px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={phoenix} alt="icon" loading="lazy" className="h-10" />
              <div className=" text-xl">Roomie Finder</div>
            </div>
            <p className="text-violet-800 mb-6 leading-relaxed">
              Discover extraordinary properties through our curated collection
              of listings.
            </p>
            <div className="flex gap-3">
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center text-violet-800 hover:text-white transition-all duration-300 border border-white/10"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center text-violet-800 hover:text-white transition-all duration-300 border border-white/10"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center text-violet-800 hover:text-white transition-all duration-300 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center text-violet-800 hover:text-white transition-all duration-300 border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Buy Property
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Rent Property
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Sell Property
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Penthouses
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  loading="lazy"
                  className="text-violet-800 hover:text-violet-900 transition-colors"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-violet-800">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-900" />
                <span>123 swami vivekanandnagar, Pune 411057</span>
              </li>
              <li className="flex items-center gap-3 text-violet-800">
                <Phone className="w-5 h-5 flex-shrink-0 text-violet-900" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-violet-800">
                <Mail className="w-5 h-5 flex-shrink-0 text-violet-900" />
                <span>info@roomiefinder.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-violet-800 text-sm">
              © 2025 RoomieFinder. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to=""
                loading="lazy"
                className="text-violet-800 hover:text-violet-800 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to=""
                loading="lazy"
                className="text-violet-800 hover:text-violet-800 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to=""
                loading="lazy"
                className="text-violet-800 hover:text-violet-800 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
