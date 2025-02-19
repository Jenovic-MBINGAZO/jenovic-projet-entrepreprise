import { Facebook, Twitter, Linkedin, Instagram, BookText as TikTok } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens pertinents</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/realisations" className="hover:text-white transition-colors">Réalisations</a>
              </li>
              <li>
                <a href="/a-propos" className="hover:text-white transition-colors">À propos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nos Contacts</h3>
            <div className="space-y-2">
              <p>Kinshasa : N°12, Avenue Mobuto, Q. Kimbwala, C. Mont-Ngafula</p>
              <p>Goma : N°65, Avenue Mukwasongo, Q. Murara, C. Karisimbi</p>
              <p>+243977600593</p>
              <p>+243954289547</p>
              <p>servicetechnique@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <TikTok className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} KTB Workshop. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}