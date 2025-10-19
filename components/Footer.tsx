"use client";

import Link from "next/link";
import { Phone, MapPin, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-black to-gray-900 text-white py-12 border-t border-primary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div id="kontakt" className="container mx-auto px-4 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Orkestar Rakete</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Profesionalni trubački orkestar za svadbe, slave i sve vrste
              proslava širom Srbije. Najpovoljnije cene i vrhunski kvalitet!
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="#usluge"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Naše Usluge
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Naše Usluge</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Trubači za Svadbe</li>
              <li>Orkestar za Slave</li>
              <li>Trubači za Krštenja</li>
              <li>Rođendani i Proslave</li>
              <li>Korporativni Događaji</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:0637894687"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    063 789 4687
                  </a>
                  <p className="text-sm text-gray-500">Pozovite nas 24/7</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Velika Plana, Srbija</p>
                  <p className="text-sm text-gray-500">Pokrivamo celu Srbiju</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities We Cover */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">
            GRADOVI KOJE POKRIVAMO:
          </h4>
          <p className="text-sm text-gray-500">
            Velika Plana • Smederevo • Požarevac • Svilajnac • Despotovac •
            Jagodina • Kragujevac • Valjevo • Kraljevo • Užice • Leskovac • Cela
            Srbija
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Trubački Orkestar Rakete -
              Dejvid Stamenković. Sva prava zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Izrada sajta:{" "}
              <span className="font-bold text-primary">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
