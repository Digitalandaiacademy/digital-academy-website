import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#353c6b] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="relative w-48 h-12 mb-4">
              <Image
                src="/images/logo.png"
                alt="Digital & AI Academy"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <p className="text-gray-300">
              Transformez votre entreprise avec nos solutions digitales sur mesure.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+237695265626" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                  +237 695 265 626
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+237672991834" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                  +237 672 991 834
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">Douala, Bonabéri, Cameroun</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#7abbed] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Digital & AI Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}