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
  let linksCol1 = [
    {
      key: 1,
      value: "Team",
      to: "/aboutus",
    },
    {
      key: 2,
      value: "How It Works",
      to: "",
    },
    {
      key: 3,
      value: "Community",
      to: "",
    },
    {
      key: 4,
      value: "careers",
      to: "",
    },
    {
      key: 5,
      value: "Buy Property",
      to: "",
    },
  ];
  let linksCol2 = [
    {
      key: 1,
      value: "Apartments",
      to: "",
    },
    {
      key: 2,
      value: "Flats",
      to: "",
    },
    {
      key: 3,
      value: "Commercial",
      to: "",
    },
    {
      key: 4,
      value: "PG",
      to: "",
    },
    {
      key: 5,
      value: "Hostel",
      to: "",
    },
  ];
  return (
    <footer className="relative border-t border-white/10 bg-gray-400/10 text-gray-500">
      <div className="max-w-[2000px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-15 gap-y-10 mb-16">
          {/* company */}
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <img src={phoenix} alt="icon" loading="lazy" className="h-10" />
              <div className=" text-xl">Roomie Finder</div>
            </div>
            <p className=" mb-6 leading-relaxed">
              Discover extraordinary properties through our curated collection
              of listings.
            </p>
            <div className="flex gap-3">
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 border border-white/10"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 border border-white/10"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to=""
                loading="lazy"
                className="w-10 h-10 bg-white/5 hover:bg-violet-700 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <h3 className=" ">About</h3>
              <hr className="w-25 my-2" />
              <div className="space-y-3 flex flex-col">
                {linksCol1.map((link) => (
                  <Link
                    to={link.to}
                    key={link.key}
                    className="hover:text-violet-900"
                  >
                    {link.value}
                  </Link>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div>
              <h3 className="">Property Types</h3>
              <hr className="w-25 my-2" />
              <div className="space-y-3 flex flex-col">
                {linksCol2.map((link) => (
                  <Link
                    to=""
                    loading="lazy"
                    className="hover:text-violet-900 transition-colors"
                    key={link.key}
                  >
                    {link.value}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="">Get in Touch</h3>
              <hr className="w-25 my-2" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-500">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-500" />
                  <span>123 swami vivekanandnagar, Pune 411057</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  <a href="mailto:info@rooomiefinder.com">
                    info@roomiefinder.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 RoomieFinder. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to="" loading="lazy" className="hover:transition-colors">
                Privacy Policy
              </Link>
              <Link to="" loading="lazy" className="hover:transition-colors">
                Terms of Service
              </Link>
              <Link to="" loading="lazy" className="hover:transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
