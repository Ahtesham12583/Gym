import { Link } from 'react-router-dom';
import fitnesshubLogo from '../assets/fitnesshub-logos.png';
const Footer = () => {
  const gymFeatures = [
    '24/7 Access',
    'Personal Training',
    'Group Classes',
    'Modern Equipment',
    'Nutrition Plans',
    'Locker Rooms',
  ];

  const contactInfo = [
    { icon: '📍', label: 'Location', value: '123 Fitness Street, Downtown' },
    { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
    { icon: '✉️', label: 'Email', value: 'info@fitnesshub.com' },
    { icon: '⏰', label: 'Hours', value: 'Mon-Sun: Open 24 Hours' },
  ];

  return (
    <footer className="relative bg-dark-card border-t border-amber/20 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                   src={fitnesshubLogo}
                   alt="Fitness Hub"
                   className="w-16 h-16 object-contain"
                    />
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white block">FITNESS</span>
                <span className="font-display text-xl font-bold tracking-[0.3em] amber-text -mt-1 block">HUB</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body, elevate your mind. Fitness Hub is your ultimate destination for building strength, endurance, and a healthier lifestyle.
            </p>
            <div className="flex gap-3">
  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg
               text-gray-400 hover:text-amber-light hover:border-amber hover:shadow-amber-sm
               transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M14 8h3V4h-3c-3.31 0-5 1.79-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg
               text-gray-400 hover:text-amber-light hover:border-amber hover:shadow-amber-sm
               transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4zM20.44 13.04c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38l-.2-6.96z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg
               text-gray-400 hover:text-amber-light hover:border-amber hover:shadow-amber-sm
               transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-5 h-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="#"
    aria-label="YouTube"
    className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg
               text-gray-400 hover:text-amber-light hover:border-amber hover:shadow-amber-sm
               transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
    </svg>
  </a>
</div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, 
                { to: '/booking', label: 'Book a Session' }, { to: '/contact', label: 'Contact' },
                { to: '/login', label: 'Member Login' }].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-amber-light transition-colors duration-300
                             flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Our Features
            </h4>
            <ul className="space-y-3">
              {gymFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-400">
                  <span className="text-amber-light">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-amber-light font-medium text-sm uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Fitness Hub. All rights reserved. | Built with passion under the leadership of{' '}
            <span className="text-amber-light font-semibold">Ahtesham Azhar</span> (CEO)
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
