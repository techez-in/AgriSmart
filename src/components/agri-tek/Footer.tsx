import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
             <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 mr-3 text-primary" />
                <span className="font-bold text-2xl">AgriTek</span>
            </div>
            <p className="text-slate-400">
              AgriTek Systems builds easy-to-use technology that brings precision agriculture to every Australian farmer.
            </p>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>+61452541056</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>Anupsingh1056@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>Sydney, NSW, Australia</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto py-6 px-4 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} AgriTek Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
